import React , {Component} from 'react';
import MenuItemList from "./menu-item-list.js"



export default class Menu extends Component {
	constructor (props) {
		super (props);
		this.state = {selectedIndex: null, listUsers: []};
		this.onClickHandler = this.onClickHandler.bind(this)
	};
	onClickHandler (index) {
		this.setState({selectedIndex: index})
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(res => this.setState({listUsers: res}))

	}

	render () {
		const {listUsers} = this.state;
		const {selectedIndex} = this.state;
		const context = this;

		return (
		<React.Fragment>	
		<MenuItemList 
			items={listUsers}
		 	selectedIndex={selectedIndex}
		 	context = {context}

		/>
		{(this.state.selectedIndex !== null) ? <p> Selected: {listUsers[selectedIndex].username} </p> : null}
		</ React.Fragment>
	)}
};


