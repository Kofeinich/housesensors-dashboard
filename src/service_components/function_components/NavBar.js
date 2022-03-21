import React, {useState} from "react";
import {MyParagraph} from "../styled_components/MyParagraph";
import styled, {css} from "styled-components";
import CustomImage from "./CustomImage";
import {MyHeading} from "../styled_components/MyHeading";
import {Settings, Apps} from "@material-ui/icons";
import SideBar from "./SideBar";




export const MyNavBar =  styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(175, 243, 219, 0.75);
  position: sticky;
  top: 0;
  z-index: 999;
`

export const MyNavBarWrapper =  styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconWrapper =  styled.div`
  color: #0da96e;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
`

export const ImageWrapper =  styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export const MyNavBarContainer =  styled.div`
  display: flex;
  align-items: center;
`

export const MyNavBarContainerInside =  styled.div`
`

let headingFontSize = "x-large";
let myWidth = 650;
let avatarHeight = 40;
let avatarWidth = 40;

if (document.documentElement.clientWidth <= myWidth){
    headingFontSize = "large";
}

export default function NavBar() {

    return (<MyNavBar>
                <MyNavBarWrapper>
                    <MyNavBarContainer>
                        <MyHeading primary headingMtop={0} headingMright={0} headingMbottom={0.25} headingMleft={0} headingColor={"#0da96e"} headingFontSize={headingFontSize}>
                            House Sensor
                        </MyHeading>
                    </MyNavBarContainer>
                    <MyNavBarContainer>
                        <IconWrapper>
                            <Settings/>
                        </IconWrapper>
                        <ImageWrapper>
                            <CustomImage src={""} alt={"error"} height={avatarHeight} width={avatarWidth} />
                        </ImageWrapper>
                    </MyNavBarContainer>
                </MyNavBarWrapper>
            </MyNavBar>
    )
}