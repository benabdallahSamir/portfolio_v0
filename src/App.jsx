import { About, Home, Navbar } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
};

export default App;
