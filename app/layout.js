
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Roboto_Mono } from 'next/font/google'
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable}`} >
      <Navbar/>
      <Nav/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
