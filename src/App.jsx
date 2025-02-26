import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header/index"
import Cadastro from "./pages/Cadastro";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Ipet from "./pages/ipet/index";
import Login from "./pages/Login";


import Global from "./styles/Global"

function App() {
  return (
    <div className="App">
     <Header />
     <Error />
     {/* <Cadastro /> */}
     {/* <Login /> */}
    {/* <Ipet /> */}
     {/* <Banner />
     <Home /> */}
     <Footer />
     <Global />
    </div>
  );
}

export default App;
