import React, {useState} from "react";
import NavBar, {IconWrapper} from "../service_components/function_components/NavBar";
import SideBar from "../service_components/function_components/SideBar";
import styled from "styled-components";
import {Apps} from "@material-ui/icons";
import Graph from "../service_components/graphs/Graphs"

export const UserPageWrapper =  styled.div`
    display: flex;
`

export const UserPageContentWrapper =  styled.div`
  flex: 5;
  background-color: white;  
`


export default function UserPage() {
    const [clickAmount, SetClickAmount] = useState(true);

    let visible = ""

    if (clickAmount === true){
        visible = "flex"
    }

    if (clickAmount === false){
        visible = "none"
    }

    function appsClick() {
        if (clickAmount === true){
            SetClickAmount(false)
        }
        else{
            SetClickAmount(true)
        }
    }

    /* <IconWrapper>
                <Apps className="app-icon"/>
            </IconWrapper>*/

    return (
        <div>
            <NavBar/>
            <UserPageWrapper>
                <SideBar visible={visible} />
                <UserPageContentWrapper>
                    <Graph/>
                </UserPageContentWrapper>
            </UserPageWrapper>
        </div>
    )
}