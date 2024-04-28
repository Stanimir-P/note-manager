import React from "react";
import "./CreateNote.css";
import { Backdrop, Button } from '@mui/material';
import { colorPalette } from "../../utils/colorPalette";
import { NoteActionsForm } from "../Forms/NoteActions/NoteActionsForm";

const buttonClass = {
    backgroundColor: colorPalette.main,
    color: colorPalette.white,
    '&:hover': {
        backgroundColor: colorPalette.darkBlue,
    }
}

export const CreateNote: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
  
    const handleClose = (): void => {
        setIsOpen(false);
    };
  
    const handleOpen = (): void => {
        setIsOpen(true);
    };

    return (
        <div className="create-note-button-wrapper">
            <Button 
                size="large" 
                variant="contained"
                sx={buttonClass}
                onClick={handleOpen}
            >
                Create Note
            </Button>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen}
            >
                <NoteActionsForm formType="create" onClose={handleClose} />
            </Backdrop>
        </div>
    )
}