import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";
import IntroLoader from "./components/common/IntroLoader";
import BackToTop from "./components/common/BackToTop";
export const metadata = {
  title: "5 Star Fitness Buxar | Best Gym in Buxar",
  description:
    "5 Star Fitness Buxar is a professional fitness gym offering modern workout facilities, personal training, strength training, and fitness programs for a healthier lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <IntroLoader/>
        <BackToTop/>
        <Header />
        <Hero/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
