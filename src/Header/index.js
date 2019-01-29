import React, {Component} from 'react';
import {Menu, Item, Button, Input, Radio, Segment, Form} from 'semantic-ui-react';


class Header extends Component{
	constructor(){
		super();


	}
	render(){
		return(
			<div>
				<Segment id='header' inverted>
				<Menu inverted secondary>
					<Menu.Item name='About' active={this.props.activeItem === 'About Me'} onClick={this.props.handleClick.bind()}>About Me</Menu.Item>
					<Menu.Item name='Toolkit' active={this.props.activeItem === 'Toolkit'} onClick={this.props.handleClick.bind()}>Toolkit</Menu.Item>
					<Menu.Item name='Projects' active={this.props.activeItem === 'Projects'} onClick={this.props.handleClick.bind()}>Projects</Menu.Item>
					<Menu.Item name='Contact' active={this.props.activeItem === 'Contact'} onClick={this.props.handleClick.bind()}>Contact</Menu.Item>

				<Menu.Menu position='right'>
					<h1 className='myName'>Andy Prudhomme</h1>	
				</Menu.Menu>
				</Menu>
				</Segment>
			</div>




			)
	}
}



export default Header