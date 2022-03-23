import React, {useState} from "react";
import NavBar, {IconWrapper} from "../service_components/function_components/NavBar";
import SideBar from "../service_components/function_components/SideBar";
import styled from "styled-components";
import {getSingleElementValue} from "@testing-library/jest-dom/dist/utils";
import {Apps} from "@material-ui/icons";
import Graph from "../service_components/graphs/Graphs"

export const UserPageWrapper =  styled.div`
    display: flex;
`

export const UserPageContentWrapper =  styled.div`
  flex: 4;
  background-color: #61dafb;  
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

    return (
        <div>
            <IconWrapper>
                <Apps className="app-icon"/>
            </IconWrapper>
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