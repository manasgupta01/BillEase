import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name, email, website, phone, bankAccount, bankName } =
    useContext(State);

  return (
    <>
      <footer className="flex-box flex footer border-t-2 border-gray-300 pt-5">
        <ul className="flex items-center justify-center">
         <div className="items-left justify-left left">
         <li>
            <span className="font-bold">Your name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {phone}
          </li> 
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}

            </a>
          </li></div>
          <div className="items-right justify-right right">
            <h3 className="font-bold text-2xl">
              bank details:
            </h3>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {bankAccount}
          </li>
         </div>
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        By {" "}
        <a
          href="https://manasgupta.000webhostapp.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Manas Gupta
        </a>
      </p>
    </>
  );
}
