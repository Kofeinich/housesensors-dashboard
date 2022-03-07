import Cookies from 'js-cookie'

export default function IsLogIn() {
    return Cookies.get("TOKEN") !== undefined
}