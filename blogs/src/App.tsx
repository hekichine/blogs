import "./App.css";
import Footer from "./commons/footer/Footer";
import Header from "./commons/haeder/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="body">
        <header>
          <Header />
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
