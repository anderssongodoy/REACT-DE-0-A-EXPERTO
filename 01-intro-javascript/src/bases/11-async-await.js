
// ASYNC - AWAIT

// const getImagenPersonas = () => new Promise(resolve => resolve('https://asdasd.com'))

// getImagenPersonas().then(console.log)



// const getImagen = async() =>{
//     return 'https://asdasd.com'
// }

// getImagen().then(console.log)


const getImagen = async () => {

    try {
        const apiKey = 'Hqf9KsV9Z41C96cx3cb4EcqIDAwJHEFm'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json()

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (err) {
        console.error(error)
    }
}

getImagen()