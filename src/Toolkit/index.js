import React, {Component} from 'react';
import {Segment, Divider, Header, Icon, Grid, Search, Button} from 'semantic-ui-react';


class Toolkit extends Component{
	constructor(){
		super()

		this.state = {
			node: true,
			react: true,
			express: true,
			mongo: true,
			django: true,
			html: true,
			postgres: true,
			git: true,
			css: true
		}
	}
	handleMouseEnter = (e, data) => {
		console.log(e.currentTarget.id, '<--Current target');
		console.log(data, '<---DATA');
		this.setState({
			[e.currentTarget.id]: false
		})
	}
	handleMouseLeave = (e) => {
		this.setState({
			[e.currentTarget.id]: true
		})
	}
	render(){
		return(
			<div>
			<br/>
			<div className='heading'>
			<Header as='h1'>My Developer Toolkit</Header>
			</div>
	<div className='stepGroup'>
	<Segment className='row' placeholder >
    <Grid columns={3} stackable textAlign='center'>
 

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header  icon>
            <Icon id='node' onClick={this.toggle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} loading={this.state.node}  name='node js' />
            Node.js
          </Header>
        </Grid.Column>

        <Grid.Column>
          <Header  icon>
            <Icon id='react' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.react}  name='react' />
            React.js
          </Header>
        </Grid.Column>
        <Grid.Column>
        	<Header  icon>
        		<Icon id='express' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.express}  name='js'/>
        		Express.js
        	</Header>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </Segment>
  </div>
  <div className='stepGroup'>
  <Segment className='row' placeholder >
    <Grid columns={3} stackable textAlign='center'>
 

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header  icon>
            <Icon id='mongo' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.mongo}  name='database' />
            MongoDB
          </Header>
        </Grid.Column>

        <Grid.Column>
          <Header  icon>
            <Icon id='django' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.django}  name='python' />
            Django
          </Header>
        </Grid.Column>
        <Grid.Column>
        	<Header  icon>
        		<Icon id='html' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.html}  name='html5'/>
        		HTML5
        	</Header>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </Segment>
  </div>
  <div className='stepGroup'>
    <Segment className='row' placeholder >
    <Grid columns={3} stackable textAlign='center'>
 

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header  icon>
            <Icon id='postgres' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.postgres}  name='database' />
            PostgreSQL
          </Header>
        </Grid.Column>

        <Grid.Column>
          <Header  icon>
            <Icon id='git' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}loading={this.state.git}  name='git' />
            Git && Github
          </Header>
        </Grid.Column>
        <Grid.Column>
        	<Header  icon>
        		<Icon id='css' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} loading={this.state.css}  name='css3 alternate'/>
        		CSS3
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



export default Toolkit