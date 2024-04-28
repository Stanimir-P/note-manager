import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NoteListContent } from './app/components/NoteListContent';
import { AppHeader } from './app/components/AppHeader';
import { LoginForm } from './app/components/Forms/Auth/LoginForm';
import { RegisterForm } from './app/components/Forms/Auth/RegisterForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NoteListContent />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);

function App() {
  return (
    <div className="App">
      <AppHeader />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
