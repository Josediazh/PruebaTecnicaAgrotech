import { createBrowserRouter, RouterProvider } from "react-router"
import { LoginPage } from "../pages/auth/LoginPage"
import { ProductsPage } from "../pages/product/ProductsPage"
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { CheckingAuth } from "../components/CheckingAuth";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    const router = createBrowserRouter(
        status == 'authenticated'
            ?
            [
                {
                    path: "/",
                    element: <ProductsPage />,
                },
            ] : status === "checking"
                ? [
                    {
                        path: "*",
                        element: <CheckingAuth />,
                    },
                ] : [
                    {
                        path: "/",
                        element: <LoginPage />
                    },
                ]
    )

    return (
        <RouterProvider router={router} />
    )
}
