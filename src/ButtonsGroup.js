import React from 'react';
import SimpleButton from "./SimpleButton";

class ButtonsGroup extends React.Component {
    constructor(props) {
        {/* Deprecated, still ok */}
        super(props);
        {/* Initially the state's chosen is at 0, so 'Chess' is selected */}
        this.state = { chosen : 0 };
    }

    /* Function to chenge the state by a given id */
    changeSelected = (id) => {
        this.setState( {chosen: id});
    }

    /* Render function (I must have it) that actually crate the div where I'll insert all the buttons */
    render() {
        return <div>
            {this.props.names.map((name, index) => 
            (<SimpleButton  key={index} 
                            name={name} 
                            index={index} 
                            selected={index===this.state.chosen} 
                            changeSelected={this.changeSelected}/>))}
        </div>
    }


}

export default ButtonsGroup;