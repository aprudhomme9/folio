import React, {Component} from 'react';
import { Segment, Progress, Header, Container, Step, Icon} from 'semantic-ui-react';

class BioContainer extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				
					<br></br>
					<br></br>
					<div className='heading'>
					<Segment className='first' >
					<div className='heading'>
					<Header  as='h1'>About Me</Header>
					
					<Header  as='h4'>Software sales strategist and customer success professional turned software developer. </Header>
					<Header  as='h4'>A practical and analytical thinker eager to create accessible solutions to ambiguous problems.</Header>
					<Header  as='h4'>I love React, API development, and data.</Header>
					</div>
					</Segment>
					</div>
					
	<div className='heading'>			
	<Segment >
	<div className='heading'>
	
		<Header  as='h3'>How I got here...</Header>

	</div>
	<div inverted className='stepGroup'>
	<Step.Group inverted stackable fluid size=
	'mini' attached='top'>
      <Step inverted>
        <Icon name='graduation cap' />
        <Step.Content inverted>
          <Step.Title inverted>University of Wisconsin - Madison</Step.Title>
          <Step.Description inverted>Mathematical Economics, 2015</Step.Description>
        </Step.Content>
      </Step>

      <Step inverted>
        <Icon name='briefcase' />
        <Step.Content inverted>
          <Step.Title inverted>Spencer Stuart && YCharts, Inc.</Step.Title>
          <Step.Description inverted>Digital Consulting and Software Implementation</Step.Description>
        </Step.Content>
      </Step>

      <Step inverted>
        <Icon name='code' />
        <Step.Content inverted>
          <Step.Title inverted>General Assembly WDI 2018</Step.Title>
          <Step.Description inverted>Fullstack Software Development</Step.Description>
        </Step.Content>
      </Step>
      <Step inverted active>
        <Icon name='question circle' />
        <Step.Content inverted>
          <Step.Title inverted>Sotware Developer</Step.Title>
          <Step.Description inverted>404 Not Found</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
    </div>
    </Segment>
    </div>
    <div className='heading'>
    <Segment >
    <div className='heading'>
		<Header  as='h3'>My development style?</Header>

	</div>
	
				  
				    <Progress percent={33.3}  color='blue' progress >
				    	Functional Programming
				    </Progress>
				    <Progress percent={33.3}  color='orange' progress >
				    	User-focused Development
				    </Progress>
				    <Progress percent={33.3}  color='yellow' progress >
				    	Backend & Data Nerd-ing
				    </Progress>
				    <Progress percent={100}  color='green' progress >
				    	Constantly Learning
				    </Progress>

				    </Segment>
	</div>
	</div>


			)
	}
}


export default BioContainer