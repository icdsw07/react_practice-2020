import React from 'react';

function Name(props) {
    console.log('props', props);
    return (
        <div>
            {props.name}
        </div>
    );
}

export default Name;