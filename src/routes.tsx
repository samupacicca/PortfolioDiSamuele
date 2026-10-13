import { createHashRouter } from "react-router";
import { PortfolioHome, ProjectPage } from "./PortfolioHome";

export const router = createHashRouter([
  { path: "/", Component: PortfolioHome },
  { path: "/progetti/:slug", Component: ProjectPage },
]);
