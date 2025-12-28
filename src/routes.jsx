import { createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Atendimento from "./pages/Atendimento";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Cadastro />,
        errorElement: <h1>pagina não encontrada</h1>,
    },
    {
        path: "/atendimento",
        element: <Atendimento />,
        errorElement: <h1>pagina não encontrada</h1>,
    }
])