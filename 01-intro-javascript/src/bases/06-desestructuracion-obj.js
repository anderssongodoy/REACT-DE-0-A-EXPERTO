
    // DESESTRUCTURACION
    // ó ASIGNACION DESESTRUCTURANTE
    // OBJETOS

    const persona = {
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman',
        // rango: 'Soldado'
    };

    const useContext = ( {nombre, edad, clave, rango = 'Capitán'} ) => {
        // const { edad, clave, nombre } = usuario;
        console.log( nombre, edad, rango )

        return{
            nombreClave: clave,
            anios: edad,
            latlng:{
                lat: 14.1232,
                lng: -12.3232
            }
        }
    }

    const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona )
    // const { lat, lng } = latlng;

    console.log( nombreClave, anios );
    console.log( lat, lng );
    // const { nombre, edad, clave } = persona;

    // console.log( nombre );
    // console.log( edad );
    // console.log( clave );

    // console.log(persona.nombre);
    // console.log(persona.edad);
    // console.log(persona.clave);