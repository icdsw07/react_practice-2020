import React from 'react';

function NameButton(props) {
    return (
        <div onClick={props.onClickEvent}>
            {props.name}
        </div>
    )
}
export default NameButton;
