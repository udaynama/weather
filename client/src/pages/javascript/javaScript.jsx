import React , {useState} from "react";
import "./javaScript.css";

const JavaScript = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [thirdValue, setThirdValue] = useState('');
    const [areaOfTriangle, setAreaOfTriangle] = useState('');
    // const [maxNumber, setmaxNumber] = useState(0);
    // const [max, setMax] = useState(0);
    const Area=()=>{
        var s = (firstValue + secondValue + thirdValue)/2;
        var area = Math.sqrt(s * ((s-firstValue)*(s-secondValue)*(s-thirdValue)));
        setAreaOfTriangle(area);
    }
// const maxOfThree=()=> {
//   if (firstValue > secondValue)
//   {
//     max = firstValue;
//   } else
//   {
//     max = secondValue;
//   }
//   if (thirdValue > max) 
//   {
//     max= thirdValue;
//   }
// //   setmaxNumber(maxNumber);
// console.log("qazwsx",max);
// }
   
  return (
    <div className="js-main-container">
      <div className="area-of-triangle">
        <h3>Calculate the Area of triangle</h3>
        <label htmlFor="S1">Value of side1 : </label>
        <input type="number" id="S1" value={firstValue} onChange={e=>setFirstValue(+e.target.value)} />
        <label htmlFor="S2">Value of side2 : </label>
        <input type="number" id="S2"  value={secondValue}  onChange={e=>setSecondValue(+e.target.value)}  />
        <label htmlFor="S3">Value of side3 : </label>
        <input type="number" id="S3"  value={thirdValue}  onChange={e=>setThirdValue(+e.target.value)}  />
        <button  className="calculate-area" onClick={Area} >claculate</button>
        {/* <button  className="calculate-area" onClick={maxOfThree} >claculate</button> */}
        <h3>
          Area of Triangle: <span id="value">{areaOfTriangle}</span> 
        </h3>
      </div>
    </div>
  );
};

export default JavaScript;
