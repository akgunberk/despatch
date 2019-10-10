import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import './Main.css';
import Side from './Side';
import Tickets from './Tickets';
import Priority from './Priority';
import Tags from './Tags';
import MiddleColumn from './MiddleColumn';
import ThirdColumn from './ThirdColumn';





const Main = () => (
  <Grid>
    <Responsive minWidth={415} style={{paddingRight:"0"}}>
    <Grid.Column id ="first" > {/* Left Side Bar which employs mainly ticket types, priorities and tags */}
      <Side/>
      <Tickets/>
      <Priority/>
      <Tags/>
    </Grid.Column>
    </Responsive>

    <Grid.Column id="second"> {/* Middle Column employs the active tickets */}
    
      <div class="ui container">
        <MiddleColumn/>
        <MiddleColumn/>
        <MiddleColumn/>
      </div>
    
      
  
    </Grid.Column>

    <Grid.Column id ="third"> {/* Right Column - It's empty over here*/}
          <ThirdColumn/>
    </Grid.Column>
    
  </Grid>
)

export default Main;

