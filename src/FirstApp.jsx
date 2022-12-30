// para no tener que usar un div y poder romper los estilos se usa <Fragment>

import './style.css';

const nombree = {
    message : 'holaa',
    title: 'demians'
};  // Si no cambia, o no tiene nada que ver con hooks se puede poner fuera del functional comp

const saluda = (nombre) =>`hola amigo ${nombre}, a ver si ya terminas de aprender React`;

export const FirstApp = () => {// no se puede poner un objeto, pero si se puede serializar
  return (
    <>
        {/*<h2>{ JSON.stringify(nombree)  }</h2>*/}
        <h2>{ saluda('Demian') }</h2>
        <p>Soy un subtitulo</p>
    </>
  )
}
