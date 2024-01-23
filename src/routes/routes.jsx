import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import PetsListPage from "../pages/petsList/PetsListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <PetsListPage />,
      },
    ],
  },
]);

export default router;
