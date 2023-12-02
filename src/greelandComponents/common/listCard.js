import React from 'react';

export default function ListCard(props) {
  return (
    <div className="card list-card" style={{ height: "100%" }}>
      {props.img ? <img className="card-img-top" src={props.img} alt="Card cap" /> : ""}
      <div className="card-body">
        <h5 className="card-title">{`${props.title}`}</h5>
        <ul className="list-card-ul">
        {props.list.map((item, i)=>{
            return (
                <li className='list-card-item' key={i}>{item}</li>
            )
        })}
        </ul>
        {props.link ? <a href={props.link} className="btn btn-primary">{props.linkText}</a> : ""}
        
      </div>
    </div>
  );
}