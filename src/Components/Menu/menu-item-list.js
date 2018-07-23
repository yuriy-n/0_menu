import React , {Component} from 'react';

export default function MenuItemList({items, selectedIndex, context}) {
	return (
		<ul>
			{items.map((item, index) => {
				var defaultStyle = {}
				var selectedStyle = {color: "red"};
				var style = ((index === selectedIndex) ? Object.assign({}, defaultStyle, selectedStyle) : defaultStyle)
				return <li 
				style = {style}
				key = {item +index}
				onClick={context.onClickHandler.bind(context, index)}
				><span style={{cursor: "pointer"}}>{item.username}</span>
				</li>
			})}
		</ul>
	)
}