import { Outlet } from "react-router-dom";
import "./authLayout.scss";

// Layout for login and register pages
export const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <Outlet />
        </div>
    )
}
