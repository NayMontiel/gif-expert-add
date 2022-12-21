import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGif';

export const useHooks = (item) => {
    const [imagenes, setImagenes] = useState([]);
    const [isloading, setIsloading] = useState(true)

    const getimagenes = async () => {
      const newImg = await getGifs(item);
      setImagenes(newImg);
      setIsloading(false)
    };
  
    useEffect(() => {
      getimagenes();
    }, []);
  return {
    imagenes,
    isloading
  }
}
