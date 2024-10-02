import "./App.css";
import ChatApp from "./components/ChatApp";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Chat",
      element: <ChatApp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
