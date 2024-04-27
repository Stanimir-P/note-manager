import { TextField } from '@mui/material';
import { AuthForm } from '../AuthForm';
import { login } from '../../../services/authServices';

export const LoginForm: React.FunctionComponent = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        login(email, password);
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
