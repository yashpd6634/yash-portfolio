import {
  Navbar,
  Footer,
  Hero,
  About,
  Features,
  Story,
  Contact,
  Hero2,
  LogoShowcase,
  AppShowcase,
  FeatureCards,
  Experience,
  TechStack,
  Contact2,
  Footer2,
} from "./components";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      {/* <Navbar2 /> */}
      <Hero />
      <Hero2 />
      {/* <About /> */}
      <AppShowcase />
      {/* <Features /> */}
      <FeatureCards />
      {/* <Story /> */}
      <Experience />
      <TechStack />
      <LogoShowcase />
      {/* <Contact /> */}
      <Contact2 />
      {/* <Footer /> */}
      <Footer2 />
    </main>
  );
};

export default App;
