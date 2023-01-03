import { useState } from 'react';
import PropTypes from 'prop-types';

// const handleAdd = ( event ) => {console.log(event)}; Si no ocupa nada de las props, entonces se puede poner afuera

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        // console.log(event)
        setCounter(counter+1);
        // setCounter( (c) => c+1 )  el valor c es counter
    };

    const handleSubstract = () => {
        setCounter(counter-1);
    }

    const handleReset = () => {
        setCounter(value);
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button role="button" className="button-74" onClick={ handleAdd }>
            +1
        </button>
        <button role="button" className="button-74" onClick={ handleSubstract }>
            -1
        </button>
        <button role="button" className="button-74" onClick={ handleReset }>
            Reset
        </button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


