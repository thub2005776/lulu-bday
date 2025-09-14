import "./globals.css";
export default function AnimatedText({text}: {text: React.ReactNode}) {
    return (
      <div className="animate-slide-up">{text}</div>
  );
}