

export const getImagen = async () => {

    try {
        const apiKey = 'Hqf9KsV9Z41C96cx3cb4EcqIDAwJHEFm'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json()

        const { url } = data.images.original;

        return url
    } catch (err) {
        // console.error(error)
        return 'No se encontro la imagen'
    }
}

getImagen()