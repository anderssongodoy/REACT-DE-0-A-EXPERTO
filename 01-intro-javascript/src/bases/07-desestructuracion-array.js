
    // DESESTRUCTURACION
    // ó ASIGNACION DESESTRUCTURANTE
    // ARREGLOS

    const personajes = ['Goku', 'Vegeta', 'Trunks'];

    // const [ p1 ] = personajes;
    // => Goku

    // const [ , p2] = personajes;
    // => Vegeta

    const [ , , p3] = personajes;

    console.log(p3)

    const retornaArreglo = () => {
        return ['ABC', 123];
    }

    // const [] = retornaArreglo();
    const [letras, numeros] = retornaArreglo();
    console.log ( letras, numeros );

    const useState = ( valor ) => {
        return [ valor, () => {console.log('Hola Mundo')}]
    }

    const [nombre, setNombre] = useState( ' Goku ');

    console.log(Nombre);
    setNombre(nombre);