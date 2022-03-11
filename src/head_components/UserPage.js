import React, {useState} from "react";
import {MyParagraph} from "../service_components/styled_components/MyParagraph";
import {MyHeading} from "../service_components/styled_components/MyHeading";
import {MyInput} from "../service_components/styled_components/MyInput";
import {MyButton} from "../service_components/styled_components/MyButton";

export default function UserPage() {


    return <div>
        <MyHeading>Please connect u device</MyHeading>
        <MyParagraph>Type you ID here</MyParagraph>
        <MyInput/>
        <MyButton
            onClick={() => {

            }}>Connect
        </MyButton>
    </div>
}