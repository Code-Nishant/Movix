import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

// importing components
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const navigate = useNavigate();

  // state hooks
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  // handler methods
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background}></Img>
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">WelCome Watchers</span>
            <span className="subTitle">
              Lights, Camera, Blockbuster! Step into a mesmerizing Cinematic
              Universe, where every frame unfolds with in-depth details,
              spellbinding reviews, and adrenaline-pumping shows.
            </span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Embark on an epic adventure..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            ></input>
            <button>Search</button>
          </div>
        </div>


        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
