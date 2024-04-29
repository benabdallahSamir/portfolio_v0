import { Home, Navbar } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
