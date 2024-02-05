import React ,{PureComponent,setState} from "react";

class PureComp extends PureComponent{
    constructor(){
        super()
        this.state={
            count:0,
            toggle:false,
        }
    }
    handlecount=()=>{
        this.state.toggle?
        this.setState({count:this.state.count+1})
        : this.setState({count:this.state.count})
    }
    handletoggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }
    render(){
        console.log('This is Pure Component')
        return(
            <div>
                <h1>pure component</h1>

                <p>{this.state.count}</p>

                <button onClick={this.handletoggle}>Toggle</button>
                <button onClick={this.handlecount}>Count</button>
            </div>
        )
    }
}
export default PureComp