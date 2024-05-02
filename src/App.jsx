import { About, Contact, Home, Navbar, Project } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default App;
