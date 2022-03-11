import React from 'react';
import styled, {css} from "styled-components";

export const MyForm = styled.form`
  display: inline-block;
  width: ${props => (props.formWidth)}%;
  height: ${props => (props.formHeight)}%;
  top: ${props => (props.formTop)};
  left: ${props => (props.formLeft)};
  overflow: auto;
  position: ${props => (props.formPosition)};
  margin: ${props => (props.formMtop)}rem ${props => (props.formMright)}rem ${props => (props.formMbottom)}rem ${props => (props.formMleft)}rem;
  padding: ${props => (props.formPtop)}rem ${props => (props.formPright)}rem ${props => (props.formPbottom)}rem ${props => (props.formPleft)}rem;
  background: ${props => (props.formBackgroundColor)};
  border: ${props => (props.formBorderSize)}px solid ${props => (props.formBorderColor)};;
  border-radius: ${props => (props.formBorderRadiusSize)}px;
`