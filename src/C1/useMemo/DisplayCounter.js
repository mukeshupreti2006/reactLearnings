import React from "react";


function DisplayCounter({counter}){

    console.log("Counter display");
    return (
      <>
        <h1 style={{color: "black",background:"white"}}> Counter : {counter}</h1>
      </>
    );



}

//export default DisplayCounter
export default React.memo(DisplayCounter)