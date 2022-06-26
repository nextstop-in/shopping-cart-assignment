import React from "react";
import Login from "../Pages/Login";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp/";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../Pages/HomePage";

const PageContainer = styled("div")({
  width: "60%",
  height: "100%",
});

const Router = () => {
  return (
    <PageContainer>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </PageContainer>
  );
};

export default Router;
