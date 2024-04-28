export const getDate = (): string => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return mm + '-' + dd + '-' + yyyy;
}

export const authValidate = (email: string, password: string, repeatePassword?: string): string | undefined => {
    const errorMessage = validateEmail(email) || validatePassword(password, repeatePassword);

    return errorMessage;
}

const validateEmail = (email: string): string | undefined => {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === "" || !email.match(emailRegex)) {
        return "Please input correct email address";
    }
}

const validatePassword = (password: string, repeatePassword?: string): string | undefined => {
    if (password.length < 6) {
        return "Password should be at least 6 characters!";
    }

    if (repeatePassword !== undefined && password !== repeatePassword) {
        return "Password and Repeat Password doesn't match!";
    }
}

export const validateNote = (title: string, content: string): string | undefined => {
    if (title === "" && content === "") {
        return "You must fill at least one of the fields!";
    }
}