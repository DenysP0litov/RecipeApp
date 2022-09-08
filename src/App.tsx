import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from './store';
import { AuthorizeForm } from './components/AuthorizeForm';
import { ProtectedRoute } from './components/Protected';
import { Header } from './components/Header';
import { RecipesApp } from './components/RecipesApp';
import './App.css';
import { RecipeInfo } from './components/RecipeInfo';

export const App: React.FC = () => {
  const authStatus = useSelector(selectors.authStatus);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/auth" element={<AuthorizeForm />}/>
          <Route path="/recipes" element={
            <ProtectedRoute condition={authStatus}>
              <RecipesApp />
            </ProtectedRoute>
          }/>
          <Route path="/recipes/:recipeId" element={
            <ProtectedRoute condition={authStatus}>
              <RecipeInfo />
            </ProtectedRoute>
          }/>
          <Route path="*" element={
            <Navigate to="/recipes" replace />
          }/>
        </Routes>
      </div>
    </>
  );
};
