import { useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { SpanInfo, UserInfo } from "../styles";
import { useAuthStore } from "../../../hooks/useAuthStore";

const InfoUser = () => {

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

export default InfoUser