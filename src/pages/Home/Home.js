import React, { useEffect } from "react";
import "./Home.scss";

import { useNavigate } from "react-router-dom";
import HeaderHome from "../../components/containers/HeaderHome/HeaderHome";
import MainHome from "../../components/containers/MainHome/MainHome";
import FooterHome from "../../components/containers/FooterHome/FooterHome";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
      navigate("/error-401");
    }
    document.title = "Compass.UOL | Home";
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <HeaderHome />
      <MainHome />
      <FooterHome />
    </div>
  );
};

export default Home;
