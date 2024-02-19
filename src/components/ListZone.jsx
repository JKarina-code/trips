import { Destination } from "../pages/Destination";
import data from "../data/data";

export const ListZone = ({ zone }) => {
  const listPlaces = data.filter((place) => place.zone === zone);

  return (
    <>
      <section className="list-places">
        {listPlaces.map((item) => (
          <Destination key={item.name} item={item} />
        ))}
      </section>
    </>
  );
};
