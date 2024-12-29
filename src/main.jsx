import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProperyProvider from "./context/ProperyProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProperyProvider>
        <RouterProvider router={router} />
      </ProperyProvider>
    </QueryClientProvider>
  </StrictMode>
);
