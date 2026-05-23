import Header from "../app/components/header";
import About from "../app/components/about";
import Skills from "./components/skills";
import Certification from "./components/certification";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
         <Skills />
         <Certification/>
         <Footer/>
      </main>
    </div>
  );
}

export default App;