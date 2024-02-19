import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const Destination = ({ item }) => {
  const { name, situation } = item;

  const {agreement} = useContext(AuthContext)
  const placeFound = agreement.find(place => place.situation === name)
  return (
    <>
      <div className="destination">
        <h2 className="name">{name}</h2>
        <p className="situation">{situation}</p>
        <img src={`/../public/images/${name}.jpg`} alt="name" />

        <div className="flex">
          <Link to={`/destinations/${name}`}>Shopping</Link>
          {placeFound && <div className="heart">♥</div>}
        </div>
      </div>
    </>
  );
};

Destination.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    situation: PropTypes.string,
  }),
};
