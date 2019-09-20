import React, { useState } from 'react';
import WrapInput from './WrapInput';

const Input = (props) => {
  console.log(props);
  const [str, setStr] = useState('');

  const handleChangeOnlyText = (e) => {
    var letters = /^[A-Za-z]+$/;
    if (e.target.value.match(letters) || e.target.value === "") {
      setStr(e.target.value);
      props.handleError("");
    } else {
      props.handleError("String contain numeric value");
      throw new Error("String contain numeric value");
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChangeOnlyText} />
      <br />
      <span>{props.error ? <i>{props.error}</i> : null}</span>
    </div>
  );
}

export default WrapInput(Input);