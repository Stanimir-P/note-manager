import React from "react";
import "./NoteListContent.css";
import { Button } from '@mui/material';
import { colorPalette } from "../../utils/colorPalette";
import { NoteList } from "./NoteList/NoteList";

const buttonClass = {
    backgroundColor: colorPalette.main,
    color: colorPalette.white,
    '&:hover': {
        backgroundColor: colorPalette.darkBlue,
    }
}

export const NoteListContent: React.FunctionComponent = () => {

    const onCreateHandler = (): void => {
        console.log('create');
    }

    return (
        <div className="notes-content">
            <div className="create-note-button-wrapper">
                <Button 
                    size="large" 
                    variant="contained"
                    sx={buttonClass}
                    onClick={onCreateHandler}
                >
                    Create Note
                </Button>
            </div>

            <NoteList />
        </div>
    )
}