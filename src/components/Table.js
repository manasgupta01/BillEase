import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);
  let k = numberToWords({total})
  return (
    <>
      <table width="100%" className="mb-1 box">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
   
      <div>
    
        <h2 className="flex right items-end justify-end text-gray-800 text-xl font-bold">
          sub total. = {total.toLocaleString()} rs
        </h2>
        
        <h2 className="flex right items-end justify-end text-gray-800 text-xl font-bold">
          add CGST 9% = {((total/100)*9).toLocaleString()} rs
        </h2>
      
        <h2 className="flex right items-end justify-end text-gray-800 text-xl font-bold">
          add SGST 9% =  {((total/100)*9).toLocaleString()} rs 
        </h2>
        <h2 className="flex right items-end justify-end text-gray-800 text-xl font-bold">
          TOTAL =   {(total+((total/100)*18)).toLocaleString()} rs
        </h2>
       
      </div>
    </>
  );
}

function numberToWords(n)
{
    let limit = 1000000000000, t = 0
    // If zero console.log zero
    if (n == 0)
    {
        console.log("zero")
        return
    }
    // Array to store the powers of 10
    let multiplier = ["", "Trillion", "Billion", "Million", "Thousand"]
  
    // Array to store numbers till 20
    let first_twenty = ["", "One", "Two",
                    "Three", "Four", "Five",
                    "Six", "Seven", "Eight",
                    "Nine", "Ten", "Eleven",
                    "Twelve", "Thirteen", "Fourteen",
                    "Fifteen", "Sixteen", "Seventeen",
                    "Eighteen", "Nineteen"]
  
    // Array to store multiples of ten
    let tens = ["", "Twenty", "Thirty", "Forty", "Fifty",
            "Sixty", "Seventy", "Eighty", "Ninety"]
  
    // If number is less than 20, console.log without any
    if (n < 20)
    {
        console.log(first_twenty[n])
        return
    }
    let answer = ""
    let i = n
    while(i > 0)
    {
        /*
        Store the value in multiplier[t], i.e n = 1000000,
        then r = 1, for multiplier(million), 0 for multipliers(trillion and billion)
        multiplier here refers to the current accessible limit
        */
        let curr_hun = Math.floor(i / limit)
  
        // It might be possible that the current multiplier is bigger than your number
        while (curr_hun == 0)
        {
            // Set i as the remainder obtained when n was divided by the limit
            i %= limit
  
            // Divide the limit by 1000, shifts the multiplier
            limit /= 1000
  
            // Get the current value in hundreds, as English system works in hundreds
            curr_hun = Math.floor(i / limit)
  
            // Shift the multiplier
            t += 1
        }
  
        let flr = Math.floor(curr_hun / 100);
  
        // If current hundred is greater than 99, Add the hundreds' place
        if (curr_hun > 99)
            answer += (first_twenty[flr] + " tensundred ")
  
        // Bring the current hundred to tens
        curr_hun = curr_hun % 100
  
        // If the value in tens belongs to [1,19], add using the first_twenty
        if (curr_hun > 0 && curr_hun < 20)
            answer += (first_twenty[curr_hun] + " ")
  
        // If curr_hun is now a multiple of 10, but not 0
        // Add the tens' value using the tens array
        else if (curr_hun % 10 == 0  &&  curr_hun != 0){
            flr = Math.floor(curr_hun / 10);
            answer += (tens[flr - 1] + " ")
        }
  
        // If the value belongs to [21,99], excluding the multiples of 10
        // Get the ten's place and one's place, and console.log using the first_twenty array
        else if (curr_hun > 19  &&  curr_hun < 100){
            flr = Math.floor(curr_hun / 10);
            answer += (tens[flr - 1] + " " +
                       first_twenty[curr_hun % 10] + " ")
        }
  
        // If Multiplier has not become less than 1000, shift it
        if (t < 4)
            answer += (multiplier[t] + " ")
              
        i = i % limit
        limit = Math.floor(limit / 1000)
    }
  
    console.log(answer)
}

