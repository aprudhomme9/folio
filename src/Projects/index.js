import React, {Component} from 'react';
import {Header, Grid, Image, Card, Segment, Modal, Button} from 'semantic-ui-react';

class Projects extends Component{
	constructor(){
		super()

		this.state = {
			open: ''
		}
	}
	toggleModal = (e) => {
		// console.log('toggle');
		this.setState({
			open: e.currentTarget.name
		})
	}
	closeModal = () => {
		this.setState({
			open: ''
		})
	}
	render(){
		return(

			<div className='container'>
				<Header as='h1'>My Work</Header>
				<Grid columns={2} textAlign='center'>
					<Grid.Row>
						<Grid.Column>
							
							
							<Segment className='project' inline>
							<h1>JQuery Blackjack</h1>
							<Image className='projectImage'center position='relative'textAlign='center'fluid cursor='pointer'onClick={this.toggleModal} name='blackjack' bordered size='large' src='https://i.imgur.com/8H7ccKk.png'/>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							
							<Segment className='project'>
							<h1>Brewr - A Brewery Locator App</h1>
							<Image className='projectImage'fluid name='brewr' onClick={this.toggleModal}bordered size='large' src='https://i.imgur.com/cmaozvG.png'/>
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							
							<Segment className='project'>
							<h1>Memestream - A Social Meme App</h1>
							<Image className='projectImage'fluid name= 'memestream' onClick={this.toggleModal}bordered size='large' src='https://i.imgur.com/Q1nNNHd.png'/>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							
							<Segment className='project'>
							<h1>Watch With Friends - A Social Movie App</h1>
							<Image className='projectImage'fluid name='wwf' onClick={this.toggleModal}bordered size='large' src='https://i.imgur.com/FseOkQk.png'/>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Modal open={this.state.open === 'blackjack'}>
					<Image className='modalImage' src='https://i.imgur.com/8H7ccKk.png'/>
					<Modal.Content >
				<h4>JQuery Blackjack</h4>
				<p className='close'onClick={this.closeModal}>+</p>
				<h5>Built using JavaScript and jQuery</h5>
				<a href='https://github.com/aprudhomme9/project1'>Github</a>
				<br/>
				<br/>
				<a href='https://aprudhomme9.github.io/project1/'>Link to site</a>
					</Modal.Content>
				</Modal>
				<Modal open={this.state.open === 'brewr'}>
					<Image className='modalImage' src='https://i.imgur.com/cmaozvG.png'/>
					<Modal.Content >
				<h4>Brewr: A Brewery Checkin App</h4>
				<p className='close'onClick={this.closeModal}>+</p>
				<h5>Built using MongoDB/Express/Node and EJS with Bootstrap</h5>
				<a href='https://github.com/aprudhomme9/project-2-brewery-app'>Github</a>
				<br/>
				<br/>
				<a href='https://the-brewr-app.herokuapp.com/'>Link to site</a>
				</Modal.Content>

				</Modal>
				<Modal open={this.state.open === 'memestream'}>
					<Image className='modalImage' src='https://i.imgur.com/Q1nNNHd.png'/>
					<Modal.Content >
				<h4>Memestream: Social Meme'ing</h4>
				<p className='close'onClick={this.closeModal}>+</p>
				<h5>Built using MongoDB/Express/Node and React.js</h5>
				<a href='https://github.com/aprudhomme9/meme-generator-react'>Github</a>
					</Modal.Content>
				</Modal>
				<Modal open={this.state.open === 'wwf'}>
					<Image className='modalImage' src='https://i.imgur.com/FseOkQk.png'/>
					<Modal.Content >
				<h4>Watch with Friends</h4>
				<p className='close'onClick={this.closeModal}>+</p>
				<h5>Built using MongoDB/Express/Node and React.js</h5>
				<a href='https://github.com/aprudhomme9/capstone-frontend'>Github</a>
				<br/>
				<br/>
				<a href='https://watch-with-friends-react.herokuapp.com/#!'>Link to site</a>
					</Modal.Content>
				</Modal>

			</div>





			)
	}
}


export default Projects