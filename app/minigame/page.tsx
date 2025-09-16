'use client';

import { useMemo, useState } from 'react';
import { dynaPuff } from "../ui/fonts"
import Modal from '../ui/modal';

type CardState = 'hidden' | 'revealed' | 'matched';

type Card = {
  id: string;
  pairId: string;
  imgSrc: string;     // ảnh hiển thị
  special: boolean;
  state: CardState;
};

type DeckOptions = {
  specialPairIndex?: number; // 0..pairs-1
};


const Images = [
  '/image01.jpg',
  '/image02.jpg',
  '/image03.jpg',
  '/image04.jpg',
  '/image05.jpg',
  '/image06.jpg',
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createDeck(opts: DeckOptions = {}): Card[] {
  const pairs = Images.map((src, i) => ({ pairId: `p${i}`, imgSrc: src }));
  const specialIndex = opts.specialPairIndex ?? Math.floor(Math.random() * pairs.length);

  const cards = pairs.flatMap((p, idx) => {
    const isSpecial = idx === specialIndex;
    return [
      { id: `${p.pairId}-a`, pairId: p.pairId, imgSrc: p.imgSrc, special: isSpecial, state: 'hidden' as const },
      { id: `${p.pairId}-b`, pairId: p.pairId, imgSrc: p.imgSrc, special: isSpecial, state: 'hidden' as const },
    ];
  });

  return shuffle(cards);
}

export default function MemoryMini() {
  const [deck, setDeck] = useState<Card[]>(() => createDeck());
  const [revealed, setRevealed] = useState<string[]>([]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const matchedCount = useMemo(() => deck.filter((c) => c.state === 'matched').length, [deck]);
  const gameDone = matchedCount === deck.length;

  function reset() {
    setDeck(createDeck());
    setRevealed([]);
    setLock(false);
    setScore(0);
    setMoves(0);
  }

  async function onFlip(cardId: string) {
    if (lock) return;
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.state !== 'hidden') return;

    const nextDeck = deck.map((c) => (c.id === cardId ? { ...c, state: 'revealed' as const } : c));
    setDeck(nextDeck);
    const nextRevealed = [...revealed, cardId];
    setRevealed(nextRevealed);

    if (nextRevealed.length < 2) return;

    setMoves((m) => m + 1);
    const [id1, id2] = nextRevealed;
    const c1 = nextDeck.find((c) => c.id === id1)!;
    const c2 = nextDeck.find((c) => c.id === id2)!;

    if (c1.pairId === c2.pairId) {
      const gain = c1.special ? 173 : 150;
      setScore((s) => s + gain);
      setDeck((prev) =>
        prev.map((c) =>
          c.id === c1.id || c.id === c2.id ? { ...c, state: 'matched' as const } : c
        )
      );
      setRevealed([]);
    } else {
      setLock(true);
      setTimeout(() => {
        setDeck((prev) =>
          prev.map((c) =>
            c.id === c1.id || c.id === c2.id ? { ...c, state: 'hidden' as const } : c
          )
        );
        setRevealed([]);
        setLock(false);
      }, 700);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <p className={`${dynaPuff.className} md:text-6xl text-3xl text-blue-600 text-center md:pt-10 pt-16`}>LuLu! Where are you now?</p>
      <div className="mx-auto max-w-md px-4 md:p-0">
        <header className="mb-4 flex items-center justify-between">
          <div className="text-sm text-slate-700 mt-10">
            <div className='flex justify-start gap-2'>
              <p className={`${dynaPuff.className} text-2xl mt-2`}>
                Score:
                <span className="font-semibold"> {score} </span>
              </p>

              <img
                src={'/pineapple.png'}
                alt="label"
                className="w-10 h-10 object-cover select-none pointer-events-none rounded-xl"
                draggable={false}
              />
            </div>
            <p className={`${dynaPuff.className} text-2xl`}>
              Moves: <span className="font-semibold ml-1">{moves}</span>
            </p>


          </div>
          {/* reset */}
          {/* <button
            onClick={reset}
            className="mt-5 px-3 py-1 rounded-2xl bg-gray-50 text-white text-sm hover:bg-blue-100 shadow-md active:translate-y-px hover:cursor-pointer"
          >
             <img
                src={'icon-replay.png'}
                alt="reset"
                className="w-10 h-10 object-cover select-none pointer-events-none rounded-xl"
                draggable={false}
              />
          </button> */}
        </header>

        {gameDone && (
          <Modal openModal={gameDone}/>
        )}

        <div className="grid grid-cols-3 gap-3">
          {deck.map((c) => {
            const flipped = c.state !== 'hidden';
            return (
              <button
                key={c.id}
                onClick={() => onFlip(c.id)}
                disabled={lock || c.state === 'matched'}
                className={`relative h-24 sm:h-28 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  transition-transform [transform-style:preserve-3d] duration-300
                  ${flipped ? '[transform:rotateY(180deg)]' : ''}
                  disabled:cursor-not-allowed`}
                aria-label={flipped ? `Thẻ đã mở` : 'Thẻ úp'}
              >
                {/* Mặt sau */}
                <div className="absolute inset-0 backface-hidden rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold shadow-md">
                  <img
                    src={'/label.jpg'}
                    alt="label"
                    className="w-full h-full object-cover select-none pointer-events-none rounded-xl"
                    draggable={false}
                  />
                </div>

                {/* Mặt trước (ảnh) */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xl overflow-hidden shadow-md bg-white">
                  <img
                    src={c.imgSrc}
                    alt="Card image"
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                  {c.special && (
                    <span className="absolute -top-2 -right-2 text-[10px] bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full shadow">
                      +173
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}