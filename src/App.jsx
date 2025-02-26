import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header/index"
import Home from "./pages/Home";
import Ipet from "./pages/ipet/index";


import Global from "./styles/Global"

function App() {
  return (
    <div className="App">
     <Header />
    <Ipet />
     {/* <Banner />
     <Home /> */}
     <Footer />
     <Global />
    </div>
  );
}

export default App;
