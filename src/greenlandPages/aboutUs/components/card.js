import React from 'react';

export default function Card(props){
    return (
        <div className="card" style={{maxWidth: "18rem", height:"100%"}}>
  <img className="card-img-top" src={props.img} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{`${props.title}`}</h5>
    <p className="card-text">{`${props.body}`}</p>
    
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    );
}