// import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Card from './Cards';
import './Gallery.css'
import GalleryData from './GalleryData';
import HeadTitle from '../../common/HeadTitle/HeadTitle';

function Gdata(data){
    return(
        <Card
            img={data.img}
            title={data.title}
        />
    )
}

const Gallery=()=>{
    return(
        <>
        <HeadTitle/>
        <section className="gallery">
            <div className="g-container">
            {
                GalleryData.map(Gdata)
            }
                
            </div>
        </section>
        <h1>Gallery</h1>
</>
    )
}
export default Gallery;