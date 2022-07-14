import { Component } from "react";

class Text extends Component{
    render(){
        return(
            <p className={this.props.className}>{this.props.children}</p>
        )
    }
}
export default Text