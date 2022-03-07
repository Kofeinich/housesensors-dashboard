import React, {useState} from "react";
import IsLogIn from "../service_components/function_components/IsLogIn";
import Cookies from 'js-cookie'
import {MyForm} from "../service_components/styled_components/MyForm";
import {MyParagraph} from "../service_components/styled_components/MyParagraph";
import {MyButton} from "../service_components/styled_components/MyButton";
import {MyHeading} from "../service_components/styled_components/MyHeading";
import {MyLabel} from "../service_components/styled_components/MyLabel";
import {MyInput} from "../service_components/styled_components/MyInput";

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


    return <MyForm onSubmit={handleSubmit}>
        <MyHeading>Пожалуйста авторизуйтесь!</MyHeading>
        <MyLabel>
            <MyParagraph>Логин</MyParagraph>
            <MyInput type="text" value={login.current} onChange={setLogin}/>
        </MyLabel>
        <MyLabel>
            <MyParagraph>Пароль</MyParagraph>
            <MyInput type="password" value={password.current} onChange={setPassword}/>
        </MyLabel>
        <MyButton btnBorderSize={5} bthBorderColor={"blue"} btnBorderRadiusSize={3}
            onClick={() => {
            window.location = '/dashboard/'
        }}>Back Home
        </MyButton>
        <MyInput type="submit" value="Login"/>
    </MyForm>
}