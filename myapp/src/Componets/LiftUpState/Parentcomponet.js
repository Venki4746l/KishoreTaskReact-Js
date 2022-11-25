import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

//the lift up state is passing the data parent to child componets and comunication with anthoer childerns componet
//inth is Parent is main componet
//CHild 1 and Child are siblings the ccomunication b/t sibiling componet using the parent componet

const Parentcomponet = () => {
  const [text, setText] = useState("");
  const textChangeHAndler=(value)=>{
    setText(value)
  }

  return (
    <div>
      <div>
        <Child1 textChange={textChangeHAndler}/>
      </div>
      <div>
        <Child2 outPut={text}/>
      </div>
    </div>
  );
};

export default Parentcomponet;
