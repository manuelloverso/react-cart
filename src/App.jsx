import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      {/* Site Header */}
      <Header />

      {/* Site Main */}
      <main>
        {/* Menu */}
        <Menu />

        {/* Cart */}
        <Cart />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}

export default App;
