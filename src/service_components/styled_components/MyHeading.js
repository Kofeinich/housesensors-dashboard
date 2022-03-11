import React from 'react';
import styled, {css} from "styled-components";

export const MyHeading = styled.h1`
  font-family: "Spline Sans", sans-serif;
  ${props => props.primary && css`
    font-family: 'Oswald', sans-serif;
  `}
  font-size: ${props => (props.headingFontSize)};
  margin: ${props => (props.headingMtop)}rem ${props => (props.headingMright)}rem ${props => (props.headingMbottom)}rem ${props => (props.headingMleft)}rem;
  padding: ${props => (props.headingPtop)}rem ${props => (props.headingPright)}rem ${props => (props.headingPbottom)}rem ${props => (props.headingPleft)}rem;
  text-align:  ${props => (props.headingAlign)};
  font-weight: ${props => (props.headingWeight)};
  position: ${props => (props.headingPosition)};
  line-height: ${props => (props.headingHeight)};
  color: ${props => (props.headingColor)};
`