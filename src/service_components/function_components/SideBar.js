import React, {useState} from "react";
import styled, {css} from "styled-components";
import {MyParagraph} from "../styled_components/MyParagraph";
import {MyHeading} from "../styled_components/MyHeading";
import {Build} from "@material-ui/icons";

export const MySideBar = styled.div`
  flex: 1;
  flexDirection: 'column';
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  color: #0da96e;
  background-color: rgba(13,169,110,0.75);
  display: ${props => (props.sideVisible)};
`

export const SideBarWrapper = styled.div`
  padding: 20px;
`

export const SideBarMenu = styled.div`
  margin-bottom: 10px;
`

export const SideBarList = styled.ul`
  list-style: none;
`

export const SideBarListItem = styled.li`
  cursor: pointer;
  display: flex;
  padding: 7px;
  margin-bottom: 3px;
  border-radius: 10px;
  
  :active, :hover {
    background-color: rgba(13,169,110,1) ;
  }
`

export const IcWrapper =  styled.div`
  color: #eceff1;
  position: relative;
  cursor: pointer;
  font-size: 20px;
`

export const SideBarContainer =  styled.div`
  display: flex;
  align-items: center;
`


export default function SideBar(visible) {

    let display = "";

    if (visible === true){
        display = "flex";
    }
    if (visible === false){
        display = "none";
    }


    return (
        <MySideBar sideVisible={display}>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarContainer>
                        <IcWrapper>
                            <Build className="build-icon"/>
                        </IcWrapper>
                        <MyHeading headingColor={"#eceff1"} headingMtop={0} headingMright={0} headingMbottom={0} headingMleft={0.5}
                                   headingFontSize={"medium"} headingAlign={"left"} >
                            Dashboards
                        </MyHeading>
                    </SideBarContainer>
                    <SideBarList>
                        <SideBarListItem>
                            <MyParagraph paragraphMtop={0} paragraphMright={0} paragraphMbottom={0} paragraphMleft={0}
                                         paragraphAlign={"left"} paragraphColor={"#eceff1"}>
                                Дашборд #12bu383
                            </MyParagraph>
                        </SideBarListItem>
                        <SideBarListItem>
                            <MyParagraph paragraphMtop={0} paragraphMright={0} paragraphMbottom={0} paragraphMleft={0}
                                         paragraphAlign={"left"} paragraphColor={"#eceff1"}>
                                Дашборд №2
                            </MyParagraph>
                        </SideBarListItem>
                        <SideBarListItem>
                            <MyParagraph paragraphMtop={0} paragraphMright={0} paragraphMbottom={0} paragraphMleft={0}
                                         paragraphAlign={"left"} paragraphColor={"#eceff1"}>
                                Датчик #erv765n
                            </MyParagraph>
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
            </SideBarWrapper>
        </MySideBar>
    )
}