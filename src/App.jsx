import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Ticker from "./components/Ticker";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Menu />
      <Reservation />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;