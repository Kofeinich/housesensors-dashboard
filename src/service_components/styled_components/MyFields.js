import React from 'react';
import styled, {css} from "styled-components";

export const MyFields = styled.div` 
    background: ${props => (props.fieldsBackground)};
    margin: ${props => (props.fieldsMtop)}rem ${props => (props.fieldsMright)}rem ${props => (props.fieldsMbottom)}rem ${props => (props.fieldsMleft)}rem;
    padding: ${props => (props.fieldsPtop)}rem ${props => (props.fieldsPright)}rem ${props => (props.fieldsPbottom)}rem ${props => (props.fieldsPleft)}rem;
    height: ${props => (props.fieldsHeight * 0.2)+ 0.8}rem;
    width: ${props => (props.fieldsWidth * 0.2)+ 3}rem;
    border: ${props => (props.fieldsBorderSize)}px solid ${props => (props.fieldsBorderColor)};
    border-radius: ${props => (props.fieldsBorderRadiusSize)}px;
`
