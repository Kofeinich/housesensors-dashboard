import React from 'react';
import styled, {css} from "styled-components";

export const MyInput = styled.input`
  display: inline-block;
  font-family: "Commissioner",sans-serif;
  font-size: ${props => (props.inputFontSize)};
  margin: ${props => (props.inputMtop)}rem ${props => (props.inputMright)}rem ${props => (props.inputMbottom)}rem ${props => (props.inputMleft)}rem;
  padding: ${props => (props.inputPtop)}rem ${props => (props.inputPright)}rem ${props => (props.inputPbottom)}rem ${props => (props.inputPleft)}rem;
  text-align:  ${props => (props.inputAlign)};
  height: ${props => (props.inputHeight)}rem;
  width: 54%;
  border: ${props => (props.inputBorderSize)}px solid ${props => (props.inputBorderColor)};
  border-radius: ${props => (props.inputBorderRadiusSize)}px;
  outline: 0;
  
  :focus{
    border: ${props => (props.inputBorderSize)}px solid ${props => (props.inputBorderFocusColor)};
  }
  
`