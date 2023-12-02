import React from 'react';

const IconSection = (props) => {
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

const IconSectionWithList = (props) => {
	return (
		<div className="box-part text-center">
			<i className={`fa ${props.icon} fa-3x`} aria-hidden="true"></i>
			<div className="title">
				<h3>{props.title}</h3>
			</div>
			<div className="text">
				<ul className="list-card-ul">
					{props.list.map((item, i) => {
						return (
							<li className='list-card-item' key={i}>{item}</li>
						)
					})}
				</ul>
			</div>
			{props.link ? <a href={props.link}>{props.linkText}</a> : ""}

		</div>
	);
}

export { IconSection, IconSectionWithList }