import './AppHeader.css';
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AuthButton } from "../Auth/AuthButton";
import { logoutThunk } from '../../store/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const AppHeader: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userEmail = useAppSelector((state: RootState) => state.auth.email);

  const onLogout = () => {
    dispatch(logoutThunk(navigate));
  }

  return (
    <header className="app-header">
      {/* Spacer */}
      <div className="spacer"></div>
      
      <h3>
        Note Manager
      </h3>

      <div className="user-access">
        {!userEmail 
          ? <>
              <AuthButton title="login" path="login" />
              <AuthButton title="register" path="register" />
          </>
        : <>
            <span>Hello, {userEmail}!</span>
            <AuthButton title="logout" onClick={onLogout} />
          </> 
        }
      </div>
    </header>
  )
}