import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { incNumber,decNumber,mulNumber,divNumber } from "./actions/index";
 
const App = () => {
   const myState = useSelector((state) => state.changeTheNumber)
   const dispatch = useDispatch();
  return (
     <>
       <div className="container">
          <h1>Increament/Decrament Counter</h1>
          <h4>using React redux</h4>

       <div className="quantity">
         <a className="quantity_minus" title="Decrement"
         onClick={ () => dispatch(decNumber()) }> <span>-</span></a>
          <input className="quantity" type="text" name="quantity_input" value={myState}/>
        <a className="quantity_plus"  title="Increment" 
        onClick={ () => dispatch(incNumber()) }> <span>+</span></a>
           <a className="quantity_plus"  title="divison" 
        onClick={ () => dispatch(divNumber()) }> <span>/</span></a>
                <a className="quantity_plus"  title="Increment" 
        onClick={ () => dispatch(mulNumber()) }> <span>*</span></a>
          </div>
       </div>
      </>
  )
}
export default App