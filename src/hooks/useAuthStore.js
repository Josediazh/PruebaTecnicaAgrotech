import { useDispatch, useSelector } from "react-redux";
import { checking, logout } from "../store/auth/authSlice";
import dummyApi from "../api/apiDummy";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
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

    const checkAuthToken = async () => {

        dispatch(checking());

        const token = localStorage.getItem('token');

        console.log(token);


        if (!token) {

            dispatch(logout());

            return;
        }

        try {

            console.log('renew');


        } catch (error) {

            dispatch(logout());
            localStorage.clear();

        }

    }

    return {
        startLogin,
        checkAuthToken,
        status,
        user,
        errorMessage
    }

}
