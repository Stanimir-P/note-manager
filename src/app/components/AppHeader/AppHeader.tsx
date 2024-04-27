import { AuthButton } from "../Auth/AuthButton";
import './AppHeader.css';

export const AppHeader: React.FunctionComponent = () => {
  const isReg = true;

    return (
      <header className="app-header">
        {/* Spacer */}
        <div className="spacer"></div>
        
        <h3>
          Note Manager
        </h3>

        <div className="user-access">
          {isReg 
           ? <>
               <AuthButton title="login" path="login" />
               <AuthButton title="register" path="register" />
            </>
          : <AuthButton title="logout" />
          }
        </div>
      </header>
    )
}