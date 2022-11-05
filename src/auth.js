import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ['Jhonson'];
const editorList = ['Natalia', 'Jhon','Lina', 'Eduardo'];

const AuthContext = React.createContext();

function AuthProvider({ children}) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(undefined);

  const login = ({ username }) => {
    const isAdmin = adminList.find(admin => admin===username);
    const isEditor = editorList.find(editor => editor === username);
    let role = '';
    if (isAdmin) {
      role = 'admin'
    } else if (isEditor) {
      role = 'editor'
    } else {
      role = 'normal'
    }

    setUser({ username, role });
    navigate('/profile');
  };


  const logout = () => {
    setUser( undefined );
    navigate('/')
  };

  const auth = { user , login , logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return props.children
}

function AuthAdd(props) {
  const auth = useAuth();
  if (!auth.user || auth.user.role !== 'editor') {
    return <Navigate to="/" />
  }

  return props.children
}

function AuthEdit(props) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return props.children
}
export {
  AuthProvider,
  useAuth,
  AuthRoute,
  AuthAdd,
  AuthEdit
};