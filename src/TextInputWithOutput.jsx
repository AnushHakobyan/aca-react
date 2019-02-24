

import React, { Component } from 'react';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

class TextInputWithOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleOnChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <>
                <TextInput
                    onChange={this.handleOnChange}
                />
                <TextOutput output={this.state.value} />
            </>
        );
    }
}

export default TextInputWithOutput;
