import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";

startTransition(() => {
    createRoot(document.getElementById("root")).render(
        <StrictMode>
            <HydratedRouter />
        </StrictMode>
    );
});
