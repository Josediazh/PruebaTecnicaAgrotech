import { createBrowserRouter, RouterProvider } from "react-router"
import { LoginPage } from "../pages/auth/LoginPage"
import { ProductsPage } from "../pages/product/ProductsPage"

export const AppRouter = () => {

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <ProductsPage />,
            },
            {
                path: "/login",
                element: <LoginPage />
            },
        ]
    )

    return (
        <RouterProvider router={router} />
    )
}
