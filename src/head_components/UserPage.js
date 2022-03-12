import React, {useState} from "react";
import NavBar from "../service_components/function_components/NavBar";
import SideBar from "../service_components/function_components/SideBar";
import styled from "styled-components";

export const UserPageWrapper =  styled.div`
    display: flex;
`

export const UserPageContentWrapper =  styled.div`
    display: flex;
`


export default function UserPage() {
    return (
        <div>
            <NavBar/>
            <UserPageWrapper>
                <SideBar/>
                <UserPageContentWrapper>
                    something
                </UserPageContentWrapper>
            </UserPageWrapper>
        </div>
    )
}