import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import types from "../reducers/types";
import { Link } from "react-router-dom";

export const MyTrip = () => {
  const { agreement, dispatchAgree, refer, setTotal, total } =
    useContext(AuthContext);

  return (
    <>
      <section className="road">
        <h3>
          Your places: <span>{refer} </span>
        </h3>
        <div className="warning">
          {agreement.length < 1 ? (
            <h3>
              You have not yet contracted any activity.
              <br /> <br /> Click: &#160;
              {<Link to={"/patagonia"}>Patagonia </Link>}
              or &#160; &#160; {<Link to={"/northwest"}> North West</Link>}
            </h3>
          ) : null}
        </div>
        {/* 
          You have not yet contracted any activity. Click:{" "}
          {<Link to={"/patagonia"}>Patagonia</Link>}
          or {<Link to={"/northwest"}>North West</Link>}.
        </div> */}

        {agreement.map((place) => {
          return (
            <div key={place.situation} className="my-places">
              <p>
                {" "}
                Place:
                <span> {place.situation},</span>
              </p>
              &#160;
              <p>
                {" "}
                Price: <span>$  {place.price} </span>
              </p>
              <button
                className="btn cancelRoute"
                onClick={() => {
                  setTotal(total - place.price);
                  dispatchAgree({
                    type: types.cancel,
                    payload: { name: place.situation },
                  });
                }}
              >
                Anular
              </button>
            </div>
          );
        })}
        <h3>Total: $ {total} </h3>
      </section>
    </>
  );
};
