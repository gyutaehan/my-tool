import { useState } from 'react';

import "./StringTool.scss";

export default function StringTool() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const onGrep = () => {
    alert("만드는중..");
  }

  const clrTxtarea = () => {
    clr();
  }

  const clr = () => {
    setInputA("");
    setInputB("");
  }

  return (
    <>
      <div>
        <div>input 1</div>
        <textarea value={inputA} onChange={(i)=>setInputA(i.target.value)} rows={4} cols={50}>
        </textarea>
        count: {inputA.length}
      </div>
      <div>
        <div>input 2</div>
        <textarea value={inputB} onChange={(i)=>setInputB(i.target.value)} rows={4} cols={50}>
        </textarea>
        Input 1 {inputA === inputB ? "==" : "<>"} Input 2
      </div>
      <div>
        <input type="button" value={"Grep!"} onClick={onGrep}></input>
        <input type="button" value={"Clear!"} onClick={clrTxtarea}></input>
      </div>
    </>
  )
}