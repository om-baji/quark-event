import { Home } from "../pages/Home";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import { sections } from "./utils/config";
function App() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <Navbar />
      <main>
        <Home />
        {sections.map(
          (section) => (
            <section
              key={section}
              id={section}
              className="min-h-screen flex items-center justify-center p-4"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4 capitalize">
                  {section === "home" ? "Team Quark" : section}
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  This is the {section} section. Add your component here.
                </p>
              </div>
            </section>
          )
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
