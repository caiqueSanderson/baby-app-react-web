import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    const session = localStorage.getItem("@email");

    return session ? <Outlet /> : <Navigate to="/signin" />;
}

export default Protected;