import { TextField } from '@mui/material';
import { AuthForm } from '../AuthForm';

export const LoginForm: React.FunctionComponent = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const email = e.currentTarget.email.value;
        // const password = e.currentTarget.password.value;

        // const credential = await signInWithEmailAndPassword(auth, email, password);

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
