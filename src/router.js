import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import Types from "./Pages/Types";
import ErrorBoundary from "./Components/ErrorBoundary";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> } errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="pokemon/:id" element={<Pokemon />} />
      <Route path="types/:type" element={<Types />} />
    </Route>
  )
);