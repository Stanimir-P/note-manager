import './AuthForm.css';
import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface IAuthFormProps {
  title: string;
  submitText: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm: React.FunctionComponent<IAuthFormProps> = props => {
    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={props.onSubmit}>
                <h2>{props.title.toUpperCase()}</h2>

                {props.children}

                <div className="error-wrapper">
                    <div className="error-message"></div>
                </div>

                <Button 
                    size="large" 
                    variant="contained"
                    type="submit"
                    className="form-btn"
                >
                    {props.submitText}
                </Button>

                <div className="switch-form-message">
                    {props.title.toLowerCase() === "register"
                        ? <>
                            Have an account? 
                            <Link to="/login">Login</Link>
                        </>
                        : <>
                            Don't have an account? 
                            <Link to="/register">Register</Link>
                        </>
                    } 
                </div>
            </form>
        </div>
    );
};