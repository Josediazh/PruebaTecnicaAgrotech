import { useDispatch } from "react-redux";
import { checking } from "../store/auth/authSlice";
import dummyApi from "../api/apiDummy";

export const useAuthStore = () => {

    const dispatch = useDispatch();


    const startLogin = async ({ username, password }) => {
        dispatch(checking());

        try {

            const resp = await dummyApi.post('/auth/login', {
                username: username,
                password: password
            });

            console.log(resp);


        } catch {

        }
    }

    return {
        startLogin
    }

}