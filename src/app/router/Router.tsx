import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "../../shared/layouts/RootLayout";
import { NotFoundPage } from "../../features/notFound/pages/NotFoundPage";
import { AboutPage } from "../../features/about/pages/AboutPage";
import { RootErrorBoundary } from "../../shared/errors/RootErrorBoundary";
import { ProjectsPage } from "./../../features/projects/pages/ProjectsPage";
import { HomePage } from "../../features/home/pages/HomePage";
import { ContactPage } from "./../../features/contact/pages/ContactPage";
import { ProjectDetailPage } from "../../features/projectDetails/pages/ProjectDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      { index: true, Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/projects/:id", Component: ProjectDetailPage },
      { path: "/contact", Component: ContactPage },
      { path: "/about", Component: AboutPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
