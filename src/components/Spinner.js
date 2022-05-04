import React from 'react';
import loading from "./loading.gif";


function Spinner() {
  return (
    <div className='spinner'>
        <img  className= "my-3" src={loading} alt="loading">

        </img>
    </div>
  )
}

export default Spinner