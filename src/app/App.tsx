import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  // Main app entry
  return <RouterProvider router={router} />;
}
