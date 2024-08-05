import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container mx-auto px-4 ">
      {/* Site Header */}
      <Header />

      {/* Site Main */}
      <main>
        {/* Menu */}
        <Menu />
      </main>

      {/* Site Footer */}
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
