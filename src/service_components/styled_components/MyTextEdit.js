import React from "react";
import styled from "styled-components";

const EditableInput = styled.input`
  box-sizing: border-box;
  color: #eceff1;
  background: #0da96e;
  border: 0.5px solid rgba(106, 243, 195, 0.5);
  border-radius: 4px;
  height: 30px;
  padding: 10px;
  font-size: 12px;
  text-overflow: ellipsis;
  width: 50%;
  z-index: 1;
  text-align: left;
  margin: 5px;

  :hover {
    border: 1px solid rgba(13, 169, 110, 0.5);
    background: rgba(13, 169, 110, 0.5);
  }

  :focus {
    border-color: rgba(13, 169, 110, 0.5);
    background: rgba(13, 169, 110, 0.5);
  }
`;

export default class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: "Untitled",
            disabled: false
        };

        this.updateEditingState = this.updateEditingState.bind(this);
    }

    componentWillMount() {
        this.setState({
            currentText: this.props.defaultValue
        });
    }

    updateEditingState(e) {
        console.log(e.target)
        const textInput = this.refs.textInput;
        // console.log(textInput.value);
        if (this.state.currentText !== textInput.value) {
            this.setState({
                currentText: textInput.value,
                disabled: true
            });

            setTimeout(() => {
                this.setState({
                    disabled: false
                });
                textInput.value = this.state.currentText;
            }, 2000);
        }
    }

    render() {
        const { currentText } = this.state;
        return (
            <EditableInput
                key={this.props.i}
                type="text"
                defaultValue={currentText}
                ref="textInput"
                onBlur={this.updateEditingState}
                disabled={this.state.disabled}
            />
        );
    }
}