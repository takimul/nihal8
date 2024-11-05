import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  const home = true;
  return (
    <>
      <Navbar home={home}></Navbar>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
