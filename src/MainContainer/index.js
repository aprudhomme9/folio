import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Header from '../Header';
import BioContainer from '../BioContainer';
import Contact from '../Contact';
import Projects from '../Projects';
import Toolkit from '../Toolkit';
import Footer from '../Footer';

class MainContainer extends Component{
	constructor(){
		super()

		this.state = {
			activeItem: 'About Me'
		}
	}
	handleClick = (e) => {
		this.setState({
      		activeItem: e.currentTarget.text
    	})
	}
	render(){
		return(
			<div>
				<Header handleClick={this.handleClick} activeItem={this.state.activeItem}/>
				{this.state.activeItem === 'About Me' ? <BioContainer/> :
				this.state.activeItem === 'Toolkit' ? <Toolkit /> :
				this.state.activeItem === 'Projects' ? <Projects /> :
				<Contact />


				}
				<Footer />





			</div>
			)
	}
}


export default MainContainer;