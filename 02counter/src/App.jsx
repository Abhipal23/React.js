import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // now counter where it present needs to be update in ui :
  // now need to write  getelement by id...dom manipulation
  // 15 is intial value
  // it give an array where first index is a varaible  and a method which will control our variable
  // this hook is used to change the state : that this change will be propogate in ui

  //let counter =5

  const addValue = () => {
    // button press goes here
    // counter=counter+1
    // above code not working as my value is not incrremte but value in cosole is incementing
    // ui updation is decided by react not by js
    // react reacts on variable's updation
    // with the help of hooks data updation will take place

    setCounter(counter + 1);
  };
  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>chai and react</h1>
      <h2>counter value :{counter}</h2>
      <button
        onClick={
          addValue
          // i wanted this function execute when i press the key
        }
      >
        Add value{" "}
      </button>
      <br />
      <br />
      <button onClick={removeValue}>remove value </button>
    </>
  );
}

export default App;
