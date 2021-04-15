import React from "react";

function SimpleButton(props) {
    {/* I get the props from the ButtonsGroups that tells me if the button is selected by state
        If the button is selected, it turns blue
        If the button is not selected it turns grey
        ButtonsGroup pass changeSelected to SimpleButton so it can change the state */}
    if(props.selected)
        return <button type='button' className='btn btn-primary' style={{marginRight:5}}
                       disabled={true} >{props.name}</button>
    else
        return <button type='button' className='btn btn-secondary' style={{marginRight:5}}
                       onClick={()=>props.changeSelected(props.index)}>{props.name}</button>
}

export default SimpleButton;