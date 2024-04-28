
import { Button } from "@mui/material";
import { colorPalette } from "../../utils/colorPalette";

const buttonClass = {
    color: colorPalette.white,
    borderColor: colorPalette.secondary,
    margin: '0.5em',
    '&:hover': {
        borderColor: colorPalette.secondary,
    }
}

interface IAuthButton {
    title: string;
    path?: string;
    onClick?: () => void;
}

export const AuthButton: React.FunctionComponent<IAuthButton> = props => {
    return (
        <Button 
            variant="outlined"
            sx={buttonClass}
            href={props.path && `/${props.path}`}
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    )
}