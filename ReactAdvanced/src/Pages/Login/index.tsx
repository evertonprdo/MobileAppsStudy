import LoginProvider from "./Hooks";
import Login from "./Form";

export default function LoginApp() {
    return (
        <LoginProvider>
            <Login/>
        </LoginProvider>
    )
}