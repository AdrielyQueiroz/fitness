import React, {useState} from 'react'
import './estilo.css'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const Quantidade = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  

  return (
    <div>
        <p>Peças:</p>
        <div className='conjunto'>
            <FiMinusCircle onClick={decrement} className='minus'/>
            <button className='peças'>{count}</button>
            <FiPlusCircle onClick={increment} className='minus'/>
        </div>
    </div>
  )
}

export default Quantidade