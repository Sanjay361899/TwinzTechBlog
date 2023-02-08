import React, { useState } from "react"
import { twinxtechLogo, drawerList, navbarDownList } from "../../content/assets/constants"

import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineInstagram,AiFillLinkedin } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { BsPinterest } from "react-icons/bs";
// import { StyledButton } from "../../content/stylesheet/styles"

const Drawer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  width: 370px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  background-color: #000;
`
const Navbar = styled.div`
background: #000;
padding: 15px 0;
width: 100%;
height: auto;
z-index: 99999;
display: flex;
justify-content: center;
align-items: center;
padding: 15px 10rem;
box-sizing: border-box;
`
const NavbarSocialIcon = styled.div`
margin-right: auto;
display: flex;
    gap: 10px;`
const NavbarDown = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
`
const NavbarButton = styled.button`
background-color:transparent;
  border: 0;
  cursor: pointer;
  font-size: 24px;
`
const LogoImg = styled.div`
    text-align: center;
`
const DrawerUl = styled.ul`
    padding-left: 0px;
    `
const DrawerLi = styled.li`
   padding: 14px 0;
    list-style: none;
    border-bottom: 1px solid rgba(255,255,255,.1)`

const DrawerSocialIcon = styled.div`
bottom: 15px;
position: absolute;
left: 0;
right: auto;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
width: 100%;
`


const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
        <>
            <Navbar>
                <NavbarSocialIcon>
                    <NavbarButton className="header_social facebook" onClick={() => window.open("https://www.facebook.com/twinztechnologies/", '_blank')}><FaFacebookF style={{ color: "white" }} /></NavbarButton>
                    <NavbarButton className="header_social twitter" onClick={() => window.open("https://www.twitter.com/twinztechnologies/", '_blank')}><AiOutlineTwitter style={{ color: "white" }} /></NavbarButton>
                    <NavbarButton className="header_social instagram" onClick={() => window.open("https://www.instagram.com/twinztech/", '_blank')}><AiOutlineInstagram style={{ color: "white" }} /></NavbarButton>
                </NavbarSocialIcon>
                <Link className="navbarLogo" to="/">
                    <img src={twinxtechLogo} alt="TWINZTECH" />
                </Link>

            </Navbar>
            <NavbarDown>
                <NavbarButton onClick={() => setDrawerOpen(!drawerOpen)}>
                    <FaBars />
                </NavbarButton>
                {navbarDownList.map((list) => {
                    return <li className="NavbarDownLi">
                        <Link className="NavbarDownLink" to={list[1]}>{list[0]}</Link>
                    </li>
                })}
            </NavbarDown>

            {drawerOpen && (
                <Drawer>
                    <LogoImg>
                        <img src={twinxtechLogo} alt="TWINZTECH" style={{ height: "30px", }} />
                    </LogoImg>
                    <NavbarButton style={{ position: "absolute", right: "0px", top: "10px" }} onClick={() => setDrawerOpen(!drawerOpen)}>
                        <RxCross1 style={{
                            color: "white"
                        }} />
                    </NavbarButton>
                    <DrawerUl>
                        {drawerList.map((list) => {
                            return <DrawerLi>
                                <Link className="drawerLink" to={list[1]}>{list[0]}</Link>
                            </DrawerLi>
                        })}


                    </DrawerUl>
                    <DrawerSocialIcon>
                        <p className="social_text">connect with us</p>
                        <div className="social_main">
                            <NavbarButton className="social_button" onClick={() => window.open("https://www.facebook.com/twinztechnologies/", '_blank')}><FaFacebookF style={{ color: "white" }} /></NavbarButton>
                            <NavbarButton className="social_button" onClick={() => window.open("https://www.twitter.com/twinztechnologies/", '_blank')}><AiOutlineTwitter style={{ color: "white" }} /></NavbarButton>
                            <NavbarButton className="social_button" onClick={() => window.open("https://in.pinterest.com/TwinzTech/", '_blank')}><BsPinterest style={{ color: "white" }} /></NavbarButton>
                            <NavbarButton className="social_button" onClick={() => window.open("https://www.instagram.com/twinztech/", '_blank')}><AiOutlineInstagram style={{ color: "white" }} /></NavbarButton>
                            <NavbarButton className="social_button" onClick={() => window.open("https://www.linkedin.com/company/twinztech/", '_blank')}><AiFillLinkedin style={{ color: "white" }} /></NavbarButton>
                        </div>
                    </DrawerSocialIcon>

                </Drawer>
            )}
        </>
    )
}

export default Navigation
