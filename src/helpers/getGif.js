export const getGifs = async(item) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lYJmF06R4hNnrDy1L1uLa8UJzwVRNJoZ&q=${item}&limit=20`

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        titulo: img.title,
        imagen: img.images.original.url
    }))

    //console.log(gifs)
    return gifs;
}