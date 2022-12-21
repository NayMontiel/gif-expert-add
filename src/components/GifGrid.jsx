import React from "react";
import { GifCards } from "./GifCards";
import { useHooks } from "../hooks/useHooks";

export const GifGrid = ({ item }) => {
 const { imagenes, isloading } = useHooks(item);

 

  return (
    <>
      <h3>{item}</h3>
      {
        isloading && (<h2>Cargando....</h2>)
      }
      <div className="card-grid">
        {
            imagenes.map(({ id, titulo, imagen }) => (
                <GifCards key={id} titulo={titulo} img={imagen} />
            ))
        }
      </div>
    </>
  );
};
