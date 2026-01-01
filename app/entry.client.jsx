import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/home";
import "./assets/styles/global.css";

function Layout() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

startTransition(() => {
    const root = createRoot(document.getElementById("root"));
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
});
