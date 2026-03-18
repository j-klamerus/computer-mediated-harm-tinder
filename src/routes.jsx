// src/routes.jsx
import { createHashRouter } from "react-router-dom";

// Pages / components
import App from "./App";
import LearnMore from "./components/LearnMore";
import Feed from "./components/Feed";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/learn",
    element: <LearnMore />
  },
  {
    path: "/feed",
    element: <Feed />
  }
]);