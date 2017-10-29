import React, { Component } from 'react';
import PropTypes from 'prop-types'



class SingleInput extends React.Component {
    render() {
        function SingleInput(props) {
            return (
                <div>
                    <label>{props.title}</label>
                    <input type={props.inputType}
                        placeholder={props.placeholder}
                        onChange={props.controlFunc}
                        value={props.content}
                        id={props.id} />
                </div>
            );
        }
    }
}

SingleInput.propTypes = {
    type: PropTypes.oneOf(['text', 'number']).isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;