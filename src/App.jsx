import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


function App() {
  const [categorias, setCategorias] = useState(["One Puch"]);

  //console.log(categorias);
  // en esta parte prefiere generar una variable que contenga las categorias para no pasar la funcion como tal, ya que esta a su vez ara lo mismo que si le pasaramos la funcion pro props
  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>

      {/* input buscador */}
      <AddCategory newCategory={onAddCategory} />

      {/* listado de gif */}

      <ol>
        {categorias.map((item) => (
          <GifGrid 
            key={item}
            item={item}
          />        
          
        ))}
      </ol>

      {/* gif item */}
    </>
  );
}

export default App;
