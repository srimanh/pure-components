import React ,{Component,setState} from "react";

class counter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            toggle:false,
        };
    }
    handlecount=()=>{
        this.state.toggle ? 
        this.setState({count: this.state.count+1}): 
        this.setState({count:this.state.count})
    }

    handletoggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }
    render(){
        console.log("This is Simple Component")
        return(
            <div>
                <h1>Simple Component</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handletoggle}>Toggle</button>
                <button onClick={this.handlecount}>Count</button>
            </div>
        )
    }
}

export default counter