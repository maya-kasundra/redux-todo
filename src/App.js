import './App.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions';

const App = () => {

  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <span className="quantity__minus" title="Decrement"  onClick={() => dispatch(decNumber())}>-</span>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
        <span className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}>+</span>
      </div>
          </div>
        </div>
    
  )
}

export default App