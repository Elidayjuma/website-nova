import React from 'react';

export default function iconSection(props) {
    return (
    
               
					<div className="box-part text-center">
					    
					    <i className={`fa ${props.icon} fa-3x`} aria-hidden="true"></i>
                    
						<div className="title">
							<h3>{props.title}</h3>
						</div>
                        
						<div className="text">
							<span>{props.body}</span>
						</div>
        				{props.link ? <a href={props.link}>{props.linkText}</a> : ""}
                    
				</div>	 
    );
}