import styled from "styled-components";

export const StyledParagraph = styled.span`
color: ${props => props.color ? props.color : '#FFF'};
font-family: Roboto;
font-size: ${props => props.fontSize ? props.fontSize : 16}px;
font-style: normal;
font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
line-height: ${props => props.lineHeight ? props.lineHeight : 178.687}%; /* 28.59px */
`