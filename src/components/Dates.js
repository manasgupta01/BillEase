import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useContext(State);

  return (
    <>
      <article className="columns right box">
        <ul>
          <li className="">
            <span className="font-bold">: Invoicer number:</span> {invoiceNumber}
          </li>
          <li className="">
            <span className="font-bold">: Invoice date:</span> {invoiceDate}
          </li>
          <li className=" ">
            <span className="font-bold">: Due date:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
