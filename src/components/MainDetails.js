import { useContext } from "react";
import { State } from "../context/stateContext";

export default function MainDetails() {
  const { name, address } = useContext(State);

  return (
    <>
      <section className="column left inline box">
        <h2 className="font-bold text-3xl uppercase">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
}
