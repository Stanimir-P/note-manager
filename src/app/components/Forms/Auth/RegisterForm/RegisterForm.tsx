import { TextField } from '@mui/material';
import { AuthForm } from '../AuthForm';
import { useAppDispatch } from '../../../../store/hooks';
import { IAuthPayload, registerThunk } from '../../../../store/slices/auth/authSlice';
import { useRef } from 'react';
import { authValidate } from '../../../../utils/helperFunctions';

export const RegisterForm: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const formRef = useRef<HTMLFormElement | null>(null);


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const repeatPassword = e.currentTarget.repeatPassword.value;
        const payload: IAuthPayload = { email, password, formRef };

        const formError = authValidate(email, password, repeatPassword);

        if (formError) {
            alert(formError)
            return;
        }



        dispatch(registerThunk(payload));
    };

    return (
        <AuthForm
            title="register"
            submitText="register"
            formRef={formRef}
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