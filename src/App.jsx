import React, { useState } from "react";
import Cards from "./Cards";
import ToggleButton from "./ToggleButton";

const App = () => {
  const [show, SetShow] = useState(false);
  const handleClick = () =>SetShow(!show)

  return (
    <div>
      {/* <Welcome/> */}
      {show ? <Cards /> : null}
      <ToggleButton tem={handleClick} />
    </div>
  );
};

export default App;
