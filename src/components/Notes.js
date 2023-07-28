import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Notes() {
  const { notes } = useContext(State);

  return (
    <>
      <section className="mt-10 mb-5 box right">
        <h4>: Delivery Terms: </h4>
        <p className="">{notes}</p>
      </section>
    </>
  );
}
