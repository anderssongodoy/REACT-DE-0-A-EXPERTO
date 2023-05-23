
    // FUNCION EN JS

    // const saludar = function (nombre){
    //     return `Hola, ${nombre}`;
    // }

    const saludar2 = (nombre) => {
        return `Hola, ${nombre}`;
    }

    const saludar3 = (nombre) => `Hola, ${nombre}`;
    const saludar4 = () => `Hola mundo`;


    // saludar = 30


    // console.log( saludar('Goku') );
    console.log(saludar2('Vegeta'))
    console.log(saludar3('Goku'));
    console.log(saludar4());

    const getUser = () => (
        {
            uid: 'ABC123',
            username: 'El_papi1502'
        }
    )

    const user = getUser();
    console.log(user);
    // console.log(getUser());


    // function getUsuarioActivo( nombre ) {
    //     return {
    //         uid:'ABC567',
    //         username: nombre
    //     }
    // }

    const getUsuarioActivo = ( nombre ) => (
        {
            uid: 'ABC567',
            username: nombre
        }
    )

    const usuarioActivo = getUsuarioActivo('Fernando');
    console.log(usuarioActivo);