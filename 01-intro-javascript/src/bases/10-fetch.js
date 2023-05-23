
// FETCH API

const apiKey = 'Hqf9KsV9Z41C96cx3cb4EcqIDAwJHEFm'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion.then( resp => {
//     resp.json().then(data => {
//         console.log(data)
//     })
// })
// .catch(console.warn)

// PROMESAS EN CADENA
peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        // console.log(data.images.original.url)
    })
    .catch(console.warn)