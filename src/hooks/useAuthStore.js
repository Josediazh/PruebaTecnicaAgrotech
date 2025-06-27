import { useDispatch, useSelector } from "react-redux";
import { checking, clearMessage, login, logout } from "../store/auth/authSlice";
import dummyApi from "../api/apiDummy";
import { clearProducts } from "../store/products/productsSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async ({ user, password }) => {

        dispatch(checking());

        try {

            const resp = await dummyApi.post('/auth/login', {
                username: user,
                password
            });

            const { username, accessToken, refreshToken } = resp.data;

            localStorage.setItem('userInfo', username);
            localStorage.setItem('token', refreshToken);
            localStorage.setItem('token.init-date', new Date().getTime());

            dispatch(login({ username }));

        } catch (error) {

            dispatch(logout(error.response.data?.message || 'Ocurrio un error inesperado'));

        }
    }

    const checkAuthToken = async () => {

        dispatch(checking());

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('userInfo');

        if (!token) {

            dispatch(logout());

            return;
        }

        try {

            const resp = await dummyApi.post('/auth/refresh', {
                refreshToken: token
            });

            const { accessToken, refreshToken } = resp.data;

            localStorage.setItem('token', refreshToken);
            localStorage.setItem('token.init-date', new Date().getTime());
            dispatch(login({ username: user }));

        } catch (error) {

            dispatch(logout());
            localStorage.clear();

        }

    }

    const startLogout = () => {

        localStorage.clear();
        dispatch(logout());
        dispatch(clearProducts());

    }

    return {
        startLogin,
        checkAuthToken,
        startLogout,
        status,
        user,
        errorMessage
    }

}
