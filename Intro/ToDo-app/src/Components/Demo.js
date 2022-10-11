import { useState } from "react";
function Demo() {
  // let number = 1;
  let [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <div>
      <h2 onClick={increment}>The count is: {number}</h2>
    </div>
  );
}

export default Demo;
