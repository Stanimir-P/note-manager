import { TextField } from '@mui/material';
import { AuthForm } from '../AuthForm';
import { useAppDispatch } from '../../../../store/hooks';
import { IAuthPayload, loginThunk } from '../../../../store/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const payload: IAuthPayload = { email, password, navigate };

        dispatch(loginThunk(payload));
    };

    return (
        <AuthForm
            title="login"
            submitText="login"
            onSubmit={onSubmit}
        >
            <TextField
                required
                name="email"
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                className="form-field"
            />

            <TextField
                required
                name="password"
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                className="form-field"
            />
        </AuthForm>

    );
};
