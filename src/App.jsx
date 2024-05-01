import { About, Home, Navbar, Project } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
      </main>
    </div>
  );
};

export default App;
