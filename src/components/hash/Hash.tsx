import * as React from "react";
import "./Hash.scss";
import {createHash} from 'crypto'

const encryptSha256 = (str) => {
  const hash = createHash('sha256');
  hash.update(str);
  return hash.digest('hex')
}

export default function Hash() {
  return (
    <>
      <div>
        Hash!!
      </div>
    </>
  )
}