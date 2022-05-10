import React, { PureComponent } from 'react';
class Timeclass extends PureComponent {
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
