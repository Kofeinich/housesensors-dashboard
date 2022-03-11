import React, {useState} from "react";
import IsLogIn from "../service_components/function_components/IsLogIn";
import Cookies from 'js-cookie'
import {MyForm} from "../service_components/styled_components/MyForm";
import {MyParagraph} from "../service_components/styled_components/MyParagraph";
import {MyButton} from "../service_components/styled_components/MyButton";
import {MyHeading} from "../service_components/styled_components/MyHeading";
import {MyLabel} from "../service_components/styled_components/MyLabel";
import {MyInput} from "../service_components/styled_components/MyInput";
import {MyFields} from "../service_components/styled_components/MyFields";
import {TextUnderliner} from "../service_components/styled_components/TextUnderliner";

export default function LogPage() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    let handleSubmit = (e) => {
        e.preventDefault();
        const name = login.target.value;
        Cookies.set("NAME", name)
        fetch("/shitten_api/auth", {
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "id": password.target.value
            })
        }).then(
            r => {
                if (r.status !== 200) {
                    alert('Incorrect password or login')
                    return
                }
                r.json().then((data) => {
                    Cookies.set('TOKEN', data.token);
                    if (IsLogIn()) {
                        window.location.href = "/shit/" + name
                    }
                })
            }
        )
    }

    let myWidth = 650;
    let formWidth;
    let formHeight;
    let headingFontSize = "xxx-large";
    let formTop;
    let formLeft;
    let formPosition;
    let formBorderRadiusSize = 20;
    let inputMright = 7; let inputMleft = 7;
    let paragraphMleft = 7;
    let paragraphAlign = "left"
    let formMtop = 5; let formMright = 5; let formMbottom = 5; let formMleft = 5;
    let btnMtop = 2; let btnMright = 7; let btnMbottom = 4;  let btnMleft = 7;
    let btnPtop=0.1; let btnPright=7; let btnPbottom=0.1; let btnPleft=7;

    if (document.documentElement.clientWidth <= myWidth){
        formHeight = 100;
        formWidth = 100;
        formTop = 0;
        formLeft = 0;
        formBorderRadiusSize = 0;
        formPosition = "absolute";
        paragraphAlign = "center";
        headingFontSize = "xx-large";
        formMtop = 0;
        formMright = 0;
        formMbottom = 0;
        formMleft = 0;
        inputMleft = 1;
        inputMright = 1;
        paragraphMleft = 0;
        btnMtop = 2;
        btnMright = 0;
        btnMbottom = 0;
        btnMleft = 0;
        btnPtop=0;
        btnPright=5;
        btnPbottom=0;
        btnPleft=5;
    }


    return <MyForm onSubmit={handleSubmit}
                   formHeight={formHeight} formWidth={formWidth} formTop={formTop} formLeft={formLeft} formPosition={formPosition}
                   formMtop={formMtop} formMright={formMright} formMbottom={formMbottom} formMleft={formMleft}
                   formBackgroundColor={"#eceff1"} formBorderSize={5} formBorderRadiusSize={formBorderRadiusSize} formBorderColor={"#eceff1"}>
        <MyHeading primary headingColor={"#0da96e"} headingFontSize={headingFontSize}>House Sensors</MyHeading>
        <MyFields fieldsMtop={4} fieldsMright={0} fieldsMbottom={1.5} fieldsMleft={0}>
            <MyParagraph paragraphMtop={0} paragraphMright={0} paragraphMbottom={0} paragraphMleft={paragraphMleft}
                         paragraphColor={"#0da96e"} paragraphFontSize={"large"} paragraphAlign={paragraphAlign}  paragraphWeight={750}>Логин или e-mail</MyParagraph>
            <MyInput inputBorderSize={2} inputBorderColor={"#eceff1"} inputBorderRadiusSize={10} inputBorderFocusColor={"#0da96e"}
                inputHeight={2} inputAlign={"left"} inputMtop={1} inputMright={inputMright} inputMbottom={0} inputMleft={inputMleft} inputFontSize={"medium"}
                     type="text" value={login.current} onChange={setLogin}/>
            <MyParagraph paragraphMtop={1} paragraphMright={0} paragraphMbottom={0} paragraphMleft={paragraphMleft}
                         paragraphColor={"#0da96e"} paragraphFontSize={"large"} paragraphAlign={paragraphAlign}  paragraphWeight={750}>Пароль</MyParagraph>
            <MyInput inputBorderSize={2} inputBorderColor={"#eceff1"} inputBorderRadiusSize={10} inputBorderFocusColor={"#0da96e"}
                inputHeight={2} inputAlign={"left"} inputMtop={1} inputMright={inputMright} inputMbottom={0} inputMleft={inputMleft} inputFontSize={"medium"}
                     type="password" value={password.current} onChange={setPassword}/>
        </MyFields>
        <MyParagraph paragraphMtop={0} paragraphMright={0} paragraphMbottom={0} paragraphMleft={0}
                     paragraphColor={"#737171"} paragraphFontSize={"small"} paragraphAlign={"center"}  paragraphWeight={500}
        >Нет аккаунта?
            <TextUnderliner tuBorderSize={0.25} tuBorderColor={"#737171"} tuMtop={0} tuMright={0} tuMbottom={0} tuMleft={0.5} tuHeight={0.85}
                            tuHoverColor={"#51c5f6"} tuHoverBorderColor={"#51c5f6"} tuHoverBorderSize={0.25}
            onClick={() => {
                window.location = '/registration'
            }}>Создать сейчас</TextUnderliner>
        </MyParagraph>
        <MyButton type="submit" value="Login" btnBackground={"#0da96e"} btnColor={"#eceff1"} btnBorderSize={2} bthBorderColor={"#0da96e"} btnBorderRadiusSize={15} btnPtop={btnPtop} btnPright={btnPright} btnPbottom={btnPbottom} btnPleft={btnPleft}
                  btnMtop={btnMtop} btnMright={btnMright} btnMbottom={btnMbottom} btnMleft={btnMleft}
                  onClick={() => {
            window.location = '/dashboard'
        }}><MyParagraph paragraphColor={"#eceff1"} paragraphFontSize={"large"} paragraphAlign={"center"}  paragraphWeight={600}>Войти</MyParagraph>
        </MyButton>
    </MyForm>
}