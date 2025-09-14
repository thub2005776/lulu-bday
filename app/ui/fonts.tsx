import { 
    Henny_Penny, 
    DynaPuff, 
    Gluten,
    Birthstone
} from "next/font/google";


export const dynaPuff = DynaPuff({subsets: ["latin"],
  weight: ["400"],});

export const hennyPenny = Henny_Penny({
  variable: "--font-henny-penny",
  subsets: ["latin"],
  weight: ["400"],
});

export const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const birthstone = Birthstone({
  variable: "--font-birthstone",
  subsets: ["latin"],
  weight: ["400"],
});