import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header/index"
import Home from "./pages/Home";
import Global from "./styles/Global"

function App() {
  return (
    <div className="App">
     <Header />
     <Global />
     <Banner />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
