import React from 'react'
import { useAuth } from './auth';

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) return (<h2>Ya has iniciado sesion</h2>)

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label htmlFor='input-login'>Escribe tu nombre de usuario:</label>
        <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        id='input-login'/>

        <button type='submit'>Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };