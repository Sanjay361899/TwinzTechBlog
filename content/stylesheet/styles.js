import styled from "styled-components"
import React from "react"
const AllButton = styled.button`
width: 38px;
height: 38px;
padding: 9px;
border-radius: 50%;
font-size: 20px !important;
background: rgba(255,255,255,.15) !important;
transition: 0.4s ease-in-out;
`
export const StyledButton = ({ children }, props) => {
    return <AllButton className={props.className}>{children}</AllButton>
}