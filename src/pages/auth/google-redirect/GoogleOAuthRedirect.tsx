import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserDef, useAuthState } from "../store";

const GoogleOAuthRedirect = () => {
    const [params] = useSearchParams();
    const { setUser } = useAuthState();
    const navigate = useNavigate();

    useEffect(() => {
        const jwtUser = params.get('jwtUser');
        console.log(jwtUser);
        
        if (jwtUser) {
            const userFromJwt: UserDef = jwtDecode(jwtUser);
            userFromJwt && setUser(userFromJwt);
        }

        navigate('/');
    }, []);

    return (
        <div>
            Logging in...
        </div>
    )
}

export default GoogleOAuthRedirect;