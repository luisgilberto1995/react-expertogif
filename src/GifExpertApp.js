//Usar snipet rafc
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = (  ) =>
{
    //No se hace asi
    //const categories = ['crash bandicoot', 'spyro', 'cuphead']

    const [categories, setCategories] = useState(['crash bandicoot']);

    // const clicAgregarJuego = (e)=>
    // {
    //     setCategories([...categories, 'bloodborne']);
    // };

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
            {
                categories.map(categoria =>
                    
                    <GifGrid 
                    key={categoria}
                    category={categoria}/>

                    )
            }

        </ol>
    </>
        );
}

export default GifExpertApp;