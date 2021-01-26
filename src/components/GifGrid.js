import React/*, {useState, useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const { data:imagenes, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>loading</p>}
            <div className="card-grid">
            {
                imagenes.map(imagen =>
                    <GifGridItem 
                    key={imagen.id}
                    {...imagen}/>

                    )
            }
        </div>
        </>
    )
}
