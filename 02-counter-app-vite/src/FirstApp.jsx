// import { Fragment } from 'react'

// NO SE PUEDE ENVIAR OBJETOS

// const newMessage = 'Fernando!!!'
// const newMessage = 123
// const newMessage = [1,2,3,4,5,6,7,8,9,10]

const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
} // ESTE ES UN OBJETO PERO SE PASA A STRING EN EL h1

// const getResult = () => {
//     return 4+4
// }

const getResult = (a, b) => {
    return a * b
}

// const getResult = async() => {
//     return 4+4
// }  // COMO ES ASICRONA ES UN OBJETO


// POR RECOMENDACION TODO SE COLOCA FUERA A MENOS QUE SEA NECESARIO ESTAR DENTRO
import PropTypes from 'prop-types';
export const FirstApp = ( {title, subTitle} ) => {

    // console.log(props)

    return (
        <>
            {/* <h1>{ newMessage }</h1> */}
            {/* <h1>{ newMessage.title }</h1> */}
            {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
            {/* <div>{ getResult(1, 2) }</div> */}
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
        </>
    )
}

FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}

// FirstApp.defaultProps = {
//     title: 'No hay título',
//     subTitle: 'No hay subtítulo'
// }