import { TextField } from '@mui/material';
import { AuthForm } from '../AuthForm';

export const RegisterForm: React.FunctionComponent = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const email = e.currentTarget.email.value;
        // const password = e.currentTarget.password.value;
        // const repeatPassword = e.currentTarget.repeatPassword.value;

        // login(email, password)
      
    };

    return (
        <AuthForm
            title="register"
            submitText="register"
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

            <TextField
                required
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                variant="standard"
                fullWidth
                className="form-field"
            />
        </AuthForm>
    );
};