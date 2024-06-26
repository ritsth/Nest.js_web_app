import type { Metadata } from "next";
import { Inter } from "next/font/google";
;

const inter = Inter({ subsets: ["latin"] });

//Title of the website
export const metadata: Metadata = {
  title: {
    default: "Review",
    template: "%s | Next App",    
  },
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <div>
        {children}
    </div>
  );
}
