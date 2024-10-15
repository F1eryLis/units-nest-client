import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../store";

interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo?: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, redirectTo = '/signin' }) => {
    const { user } = useAuthState();

    if (!user) {
        return <Navigate to={redirectTo} />
    }

    return <>{children}</>
}

export default ProtectedRoute;