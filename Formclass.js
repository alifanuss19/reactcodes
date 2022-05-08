import React, { Component } from 'react';
class Formclass extends Component {
    constructor(props){
      super(props);
      this.state={
        name:"",
      };
    };
    chName=(event)=>{
      this.setState({[event.target.name]:event.target.value.toUpperCase()});
    };
    subData=(event)=>{
      event.preventDefault();
    };
    render(){
      return(
        <div>
          <form onSubmit={this.subData}>
            <label>
              name:
              <input name="name" type="text" value={this.state.name} onChange={this.chName}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        </div>
      );
    };
};
export default Formclass;
