import React from 'react';
import ChatForm from './components/ChatForm';
import { LoginButton, LogoutButton, ProtectedRoute } from './components/AuthButtons';
import Wireframe from './components/Wireframe';


export const App: React.FC = () => {
  return (
    <div>
      <Wireframe />
      <h1>Healthcare AI Chat Agent</h1>
      <LoginButton />
      <LogoutButton />
      <ProtectedRoute>
        <ChatForm />
      </ProtectedRoute>
    </div>
  );
};