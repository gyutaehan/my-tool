import { useState } from 'react';

import "./Hash.scss";
import {createHash} from 'crypto'


export default function Hash() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [select, setSelect] = useState("1");
  const [times, setTimes] = useState("1");

  const onHash = () => {
    const time = Number(times);

    if(!Number.isInteger(time)) {
      alert("input integer!!");
      clr();
      return;
    }
    
    if (time>50) {
      alert("set under 50<");
      clr();
      return ;
    }

    let outputHash = encryptSha(input);

    for (let i = 1; i<time; i++) {

      outputHash = encryptSha(outputHash);
    }
    setOutput(outputHash);
  }

  const encryptSha = (value) => {
    if(select == "1") {
      const hash = createHash('sha256');
      hash.update(value);
      return hash.digest('hex');
      
    } else {
      const hash = createHash('sha512');
      hash.update(value);
      return hash.digest('hex')
    }
  }

  const clrTxtarea = () => {
    clr();
  }

  const clr = () => {
    setInput("");
    setOutput("");
    setTimes("1");
    setSelect("1");
  }

  return (
    <>
      <div>
        <select onChange={(e)=>setSelect(e.target.value)}>
          <option value={"1"}>sha-256</option>
          <option value={"2"}>sha-512</option>
        </select>
        回数
        <input type='text' value={times} onChange={(i)=>setTimes(i.target.value)}></input>
      </div>
      <div>
        <div>input hash</div>
        <textarea value={input} onChange={(i)=>setInput(i.target.value)} rows={4} cols={50}>
        </textarea>
      </div>
      <div>
        <div>output hash</div>
        <textarea value={output} rows={4} cols={50}>
        </textarea>
      </div>
      <div>
        <input type="button" value={"Hash!"} onClick={onHash}></input>
        <input type="button" value={"Clear!"} onClick={clrTxtarea}></input>
      </div>
    </>
  )
}