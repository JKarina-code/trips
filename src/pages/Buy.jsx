import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import data from "../data/data";
import types from "../reducers/types";
import AuthContext from "../context/AuthContext";

export const Buy = () => {
  const { name } = useParams();
  const navegation = useNavigate();
  const { dispatchAgree, agreement, total, setTotal} = useContext(AuthContext);

  const getPlace = agreement.find((place) => place.situation == name);
  const handleBack = () => {
    navegation(-1);
  };
  const placeFound = data.find((item) => item.name === name);
  if (!placeFound) return <Navigate to="/patagonia" />;
  const image = `/images/${placeFound.image}`;

  const contract = () => {
    setTotal  (total + placeFound.price)
    const action = {
      type: types.contract,
      payload: { name: name, price: placeFound.price },
    };

    dispatchAgree(action);
  };

  const cancel = () => {
    setTotal  (total - placeFound.price)
    const action = {
      type: types.cancel,
      payload: { name: placeFound.name },
    };

    dispatchAgree(action);
  };
  return (
    <>
      <div className="buy">
        <h1>{name}</h1>
        <div className="services">Description: {placeFound.service}</div>

        <div className="fullImage">
          <p className="price">price: $ {placeFound.price} </p>

       
            <img src={image} alt="" />

            {!getPlace && (
              <button className="btn contract" onClick={contract}>
                Contract
              </button>
            )}
            {getPlace && (
              <button className="btn cancel" onClick={cancel}>
                Cancel
              </button>
            )}

     
              <button className="btn  back" onClick={handleBack}>
                Back
              </button>
           
          </div>
       
      </div>
    </>
  );
};
