import "./Home.css";
import Home_Header from "./components/Home_Header/Home_Header";
import bgr from "./background-cloud.jpg";
import Home_Journal from "./components/Home_Journal/Home_Journal";
import Home_Button from "./components/Home_Button/Home_Button";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${bgr})`,
        backgroundSize: "cover",
      }}
    >
      <Home_Header />
      <Home_Journal />
      <Home_Button />
      <Footer />
    </div>
  );
};

export default Home;
