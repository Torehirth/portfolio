import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "../../shared/layouts/RootLayout";
import { HomePage } from "../../features/home/pages/HomePage";
import { ProjectsPage } from "../../features/projects/pages/ProjectsPage";
import { ProjectDetailsPage } from "../../features/projectDetails/pages/ProjectDetailsPage";
import { ContactPage } from "../../features/contact/pages/ContactPage";
import { NotFoundPage } from "../../features/notFound/pages/NotFoundPage";
import { AboutPage } from "../../features/about/pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/projects", Component: ProjectsPage },
      { path: "/projects/:id", Component: ProjectDetailsPage },
      { path: "/contact", Component: ContactPage },
      { path: "/about", Component: AboutPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
