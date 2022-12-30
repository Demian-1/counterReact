// para no tener que usar un div y poder romper los estilos se usa <Fragment>

import './style.css';

import PropTypes from 'prop-types';

const nombree = {
    message : 'holaa',
    title: 'demians'
};  // Si no cambia, o no tiene nada que ver con hooks se puede poner fuera del functional comp

const saluda = (nombre) =>`hola amigo ${nombre}, a ver si ya terminas de aprender React`;

export const FirstApp = ( {title, subtitle} ) => {// no se puede poner un objeto, pero si se puede serializar
  
    // console.log(props)

    return (
    <>
        {/*<h2>{ JSON.stringify(nombree)  }</h2>*/}
        <h2>{ title }</h2>
        <p>{subtitle + 1}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string .isRequired,
    subtitle: PropTypes.number.isRequired
}