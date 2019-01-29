import React, {Component} from 'react';
import {Segment, Menu, Icon} from 'semantic-ui-react';

class Footer extends Component{
	render(){
		return(
			<div className='footer'>
				<Segment id='footer' inverted>
				<Menu inverted secondary>
					<Menu.Item > © Andy Prudhomme 2019</Menu.Item>
					

				<Menu.Menu position='right'>
					
					<Menu.Item>
						Built with React

						<Icon name='react' loading />

					</Menu.Item>

				</Menu.Menu>
				</Menu>
				</Segment>
			</div>




			)
	}
}

export default Footer;