import React, {Component} from 'react';
import {Header, Icon, Segment, Grid, Link} from 'semantic-ui-react';


class Contact extends Component{
	constructor(){
		super()

		this.state = {
			animate: true
		}
	}
	
	render(){
		return(
			<div>
				<div className='heading'>
					<Header as='h1'>Want to chat or connect?</Header>
					
				</div>
				<div className='stepGroup'>
				  <Segment className='row' placeholder >
    <Grid columns={4} stackable textAlign='center'>
 

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='linkedin' />
            <a href='https://www.linkedin.com/in/andy-prudhomme-8b546777/'>Connect on LinkedIn!</a>
          </Header>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='github' />
            <a href='https://github.com/aprudhomme9'>Visit my Github</a>
          </Header>
        </Grid.Column>
        <Grid.Column>
        	<Header icon>
        		<Icon name='phone'/>
        		+1 612-360-3823
        	</Header>
        </Grid.Column>
        <Grid.Column>
        	<Header icon>
        		<Icon name='mail'/>
        		aprudhomme9@gmail.com
        	</Header>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </Segment>
  </div>


			</div>






			)
	}
}



export default Contact