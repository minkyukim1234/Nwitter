import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAcount from "./routes/createAcount";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "profile", element: <Profile></Profile> },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/createAcount",
    element: <CreateAcount></CreateAcount>,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
