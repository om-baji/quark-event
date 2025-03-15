import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import { sections } from "./utils/config";
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
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
                  This is the {section} section. Scroll to see how the navbar
                  updates and changes as you move through the page.
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
