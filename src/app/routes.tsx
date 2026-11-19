import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Gallery } from "./pages/Gallery";
import { Impact } from "./pages/Impact";
import { Contact } from "./pages/Contact";
import { ProgramPage } from "./pages/ProgramPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { 
        path: "programs", 
        children: [
          { index: true, Component: Programs },
          { path: ":id", Component: ProgramPage },
        ]
      },
      { path: "gallery", Component: Gallery },
      { path: "impact", Component: Impact },
      { path: "contact", Component: Contact },
    ],
  },
]);
