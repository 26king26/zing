import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import router from "@/routers/index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={new QueryClient()}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
  // </React.StrictMode>,
);


