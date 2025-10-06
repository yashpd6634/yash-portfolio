import {
  Navbar,
  Footer,
  Hero,
  About,
  Features,
  Story,
  Contact,
  Hero2,
} from "./components";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Hero2 />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
