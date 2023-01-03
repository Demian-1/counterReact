import PropTypes from 'prop-types';

// const handleAdd = ( event ) => {console.log(event)}; Si no ocupa nada de las props, entonces se puede poner afuera

export const CounterApp = ({value}) => {

    const handleAdd = ( value ) => {
        console.log('+1');
        value = 100;
    };  

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button role="button" className="button-74" onClick={ handleAdd }>
            +1
        </button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


