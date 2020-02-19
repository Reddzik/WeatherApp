import React from 'react';
import './Form.css'
const Form = (props) =>{
    return(
        <form>
          <label htmlFor="cityName">
            <p>Podaj nazwę miasta</p>
            <input type="text" id="cityName" name="city"
            value={props.value} onChange={props.change}
            placeholder='Wpisz miasto'/>
            <button onClick={props.click}>Sprawdź!</button>
          </label>
        </form>
    )
}
export default Form;