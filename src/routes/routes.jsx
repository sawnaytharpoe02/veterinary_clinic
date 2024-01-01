import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import PetsList from "../pages/petsList/PetsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <PetsList />,
      },
    ],
  },
]);

export default router;
