import { FaSignOutAlt } from "react-icons/fa";
import { useAuthStore } from "../hooks/useAuthStore";
import { SpanInfo, UserInfo } from "./styles";

export const InfoUser = () => {

    const { startLogout, user } = useAuthStore();

    return (
        <>
            <UserInfo>
                <SpanInfo>Hola: {user.username}
                </SpanInfo>
                <SpanInfo><FaSignOutAlt onClick={startLogout} /></SpanInfo>
            </UserInfo>
        </>
    )
}
