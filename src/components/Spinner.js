import React from 'react';
import loading from "./loading.gif";


function Spinner() {
  return (
    <div className='spinner'>
        <img src={loading} alt="loading">

        </img>
    </div>
  )
}

export default Spinner