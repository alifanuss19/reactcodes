import React, { PureComponent } from 'react';
class Formclass extends PureComponent {
    //one & bad
    // constructor(props){
    //   super(props);
    //   this.state={
    //     name:"",
    //   };
    // };
    // chName=(event)=>{
    //   this.setState({[event.target.name]:event.target.value.toUpperCase()});
    // };
    // subData=(event)=>{
    //   event.preventDefault();
    // };
    //two & good
    subMit=(event)=>{
      event.preventDefault();
      const form = new FormData(event.target);
      console.log(form.get("name"));
    };
    render(){
      return(
        <>
          <form onSubmit={
            //one & bad
            // this.subData
            //two & good
            this.subMit
            }>
            <label>
              name:
              {/* one & bad */}
              {/* <input name="name" type="text" value={this.state.name} onChange={this.chName}/> */}
              {/* two & good */}
              <input name="name" type="text" />
            </label>
            {/* <input name="submit" type="submit" value="submit" /> */}
            <button type="submit">submit</button>
          </form>
        </>
      );
    };
};
export default Formclass;
