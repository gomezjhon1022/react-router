import React from 'react';
import { useAuth } from './auth'

function ProfilePage() {
  const auth = useAuth();
  if (!auth.user) return (<h2>Lo siento debes ingresar a tu perfíl primero para acceder a esta sección</h2>)

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
  );
}

export { ProfilePage };