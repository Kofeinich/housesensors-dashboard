import styled, {css} from "styled-components";

export const MyParagraph = styled.p`
  font-size: 62.5%;
  font-family: "Commissioner",sans-serif;
  margin: ${props => (props.paragraphMtop)}rem ${props => (props.paragraphMright)}rem ${props => (props.paragraphMbottom)}rem ${props => (props.paragraphMleft)}rem;
  padding: ${props => (props.paragraphPtop)}rem ${props => (props.paragraphPright)}rem ${props => (props.paragraphPbottom)}rem ${props => (props.paragraphPleft)}rem;
  text-align:  ${props => (props.paragraphAlign)};
  font-weight: ${props => (props.paragraphWeight)};
  position: ${props => (props.paragraphPosition)};
  line-height: ${props => (props.paragraphHeight)};
  color: ${props => (props.paragraphColor)};
`