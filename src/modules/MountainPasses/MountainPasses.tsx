import { Fragment } from "react/jsx-runtime";
import "./MountainPasses.css";
import Home_Header from "../Home/components/Home_Header/Home_Header";
import MountainPassesMain from "./components/MountainPassesMain/MountainPassesMain";
import Footer from "../../components/Footer/Footer";

const MountainPasses = () => {
  return (
    <Fragment>
      <Home_Header />
      <MountainPassesMain />
      <Footer />
    </Fragment>
  );
};

export default MountainPasses;
