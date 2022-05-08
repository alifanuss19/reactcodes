import React, { Component } from 'react';
class Formclass extends Component {
    constructor(props){
      super(props);
      this.state={
        name:"",
      };
    };
    chname=(event)=>{
      this.setState({[event.target.name]:event.target.value.toUpperCase()});
    };
    subdata=(event)=>{
      event.preventDefault();
    };
    render(){
      return(
        <div>
          <form onSubmit={this.subdata}>
            <label>
              name:
              <input name="name" type="text" value={this.state.name} onChange={this.chname}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        </div>
      );
    };
};
export default Formclass;
