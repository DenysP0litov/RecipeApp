import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from './store';
import { ProtectedRoute } from './components/protected';
import { RecipesPage } from './pages/recipes';
import { RecipeDetailsPage } from './pages/recipe-details';
import { AuthPage } from './pages/auth';

export const App: React.FC = () => {
  const authStatus = useSelector(authSelectors.authStatus);

  return (
      <Routes>
        <Route path="/auth" element={<AuthPage />}/>
        <Route path="/recipes" element={
          <ProtectedRoute condition={authStatus}>
            <RecipesPage />
          </ProtectedRoute>
        }/>
        <Route path="/recipes/:recipeId" element={
          <ProtectedRoute condition={authStatus}>
            <RecipeDetailsPage />
          </ProtectedRoute>
        }/>
        <Route path="*" element={
          <Navigate to="/recipes" replace />
        }/>
      </Routes>
  );
};
