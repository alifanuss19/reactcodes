import React, { PureComponent } from 'react';
class Formclass extends PureComponent {
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
        <>
          <form onSubmit={this.subData}>
            <label>
              name:
              <input name="name" type="text" value={this.state.name} onChange={this.chName}/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        </>
      );
    };
};
export default Formclass;
