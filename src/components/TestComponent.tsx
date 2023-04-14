import { useState } from "react";
import Square from "./Square";

import '../css/test.css';

interface Data {
  id: number,
  value: number
}

const Test = () => {
  let dateInterval: number = 365;
  let dateCloumnNum: number = Math.ceil(dateInterval / 7);
  let [data, setData]: [Array<Data>, any] = useState([]);
  for (let i = 0; i < dateInterval; i++) {
    data.push({ id: i, value: Math.ceil(Math.random() * 10) });
  }

  return (
    <div className="Test">
      <Square data={data} cloumnNum={dateCloumnNum} />
    </div>
  )
}

export default Test;