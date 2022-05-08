import React, { Component } from 'react';
class Timeclass extends Component {
    constructor(props){
      super(props);
      this.state={
        timeis:new Date().toLocaleTimeString(),
      };
    };
    times=()=>{
      this.setState({timeis:new Date().toLocaleTimeString()});
    };
    componentDidMount(){
        this.timesID=setInterval(this.times,1000);
    };
    componentWillUnmount(){
      clearInterval(this.timesID);
    };
    render(){
      return(
        <div>time is
            {' '+this.state.timeis}
        </div>
      );
    };
};
export default Timeclass;
