import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/Cards.css";
import { ClimbingBoxLoader, PuffLoader } from "react-spinners";

function CardItem(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <PuffLoader
          color="#1F98F4"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <li className={`cards__item`}>
          <Link className="cards__item__link" to={props.path}>
            <figure
              className="cards__item__pic-wrap"
              // data-category={props.label}
            >
              <img
                className="cards__item__img"
                alt={props.text}
                src={props.src}
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
              <p className="cards__item__description">{props.description}</p>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}

export default CardItem;
