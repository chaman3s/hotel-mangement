import React from 'react';
import Card from './Card';
import Tdata from './Tdata';

function Tvalue(value,index){
    return(
        <Card key={index}{...value}/>
    )
}
 const Allitems=()=>{
    return(
        <>
        <section className='Testimonial mtop'>
            <div className='container grd1'>
                {Tdata.map(Tvalue)}
            </div>
        </section>

        </>
    )
 }
 export default Allitems;