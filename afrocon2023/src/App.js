import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import FAQ from "./components/FAQ";

function App() {

  return (
    <>
      <Header />

      <Hero />

      <main id="main">

        <About />

        <Speakers />

        <Schedule />

        <Venue />

        <FAQ />

      </main>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright <strong>House of Afros Capes and Curls</strong>. All Rights
            Reserved
          </div>
        </div>
      </footer>

    </>

  );
}

export default App;
