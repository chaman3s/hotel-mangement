import React,{useState} from 'react';

const Card = (props) => {
    const [popup,setPopup]=useState(false)
    const toggleModal=()=>{
        setPopup(!popup)
    }
    return (
        <>
            <div className="items">
                <div className="img">
                <img src={props.img} alt="nothing"></img>
                <i className="fas fa-image" onClick={toggleModal}></i>
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
            </div>
            {popup && (
            <div className="popup">
            
                <div className="hide"></div>
                
                <div className="popup-content">
                <button onClick={toggleModal}>Close</button>
                    <img src={props.img} alt="" />
                </div>
            </div>
            )}
        </>
    )
}
export default Card;