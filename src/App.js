import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { Menu } from './Menu';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import { AuthProvider, AuthRoute, AuthAdd, AuthEdit } from './auth';
import { BlogAdd } from './BlogAdd';
import { BlogEdit } from './BlogEdit';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} >
              <Route path=':slug' element={<BlogPost />} >
                <Route path='edit' element={<BlogEdit />} />
              </Route>
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route
            path='/logout'
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>}
            />
            <Route
            path='/profile'
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>}
            />
            <Route path='/addpost' element={
              <AuthAdd>
                <BlogAdd />
              </AuthAdd>} />
            {/* <Route path='/editpost' element={
            <AuthEdit>
              <BlogEdit />
            </AuthEdit>} /> */}
            <Route path='*' element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
