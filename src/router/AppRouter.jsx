import { createBrowserRouter, RouterProvider } from "react-router"
import { LoginPage } from "../pages/auth/LoginPage"
import { ProductsPage } from "../pages/product/ProductsPage"
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { CheckingAuth } from "../components/CheckingAuth";
import { useProductStore } from "../hooks/useProductStore";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    const { startgetProducts } = useProductStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    useEffect(() => {
        if (status == 'authenticated') {
            startgetProducts();
        }
    }, [status])

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
