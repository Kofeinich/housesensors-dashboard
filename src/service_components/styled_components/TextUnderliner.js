import React from 'react';
import styled, {css} from "styled-components";

export const TextUnderliner = styled.span`
  display: inline-block;
  margin: ${props => (props.tuMtop)}rem ${props => (props.tuMright)}rem ${props => (props.tuMbottom)}rem ${props => (props.tuMleft)}rem;
  padding: ${props => (props.tuPtop)}rem ${props => (props.tuPright)}rem ${props => (props.tuPbottom)}rem ${props => (props.tuPleft)}rem;
  border-bottom: ${props => (props.tuBorderSize)}px solid ${props => (props.tuBorderColor)};
  line-height: ${props => (props.tuHeight)};
  color: ${props => (props.tuColor)};
  :hover {
    color: ${props => (props.tuHoverColor)};
    border-bottom: ${props => (props.tuHoverBorderSize)}px solid ${props => (props.tuHoverBorderColor)};
  }
`