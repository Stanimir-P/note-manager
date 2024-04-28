import "./NoteActionsForm.css";
import { useRef } from "react";
import { createNote, editNote } from "../../../services/dataServices";
import { Button, Input, TextField } from '@mui/material';

interface INoteActionsForm {
    formType: 'create' | 'edit';
    onClose: () => void;
}

export const NoteActionsForm: React.FunctionComponent<INoteActionsForm> = props => {
    const formRef = useRef(null);
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = e.currentTarget.noteTitle.value;
        const content = e.currentTarget.noteContent.value;

        if (props.formType === 'create') {
            createNote(title, content)
        } else {
            editNote(title, content)
        }
        
        if (formRef) {
            (formRef as unknown as HTMLFormElement).current.reset();
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form" ref={formRef} onSubmit={onSubmit}>
                {props.formType === 'create' 
                    ? <h2>Create Note</h2>
                    : <h2>Edit Note</h2>
                }

                <TextField
                    name="noteTitle"
                    label="Title"
                    variant="standard"
                    fullWidth
                    className="form-field"
                />

                <Input 
                    name="noteContent"
                    minRows={5}
                    maxRows={5}
                    multiline 
                    placeholder="Type your note here..." 
                    fullWidth
                    className="text-area-field"
                />

                <div className="error-wrapper">
                    <div className="error-message"></div>
                </div>

                <div className="note-form-footer">
                    <Button 
                        size="large" 
                        variant="contained"
                        type="submit"
                        className="form-btn"
                    >
                        {props.formType}
                    </Button>

                    <Button 
                        size="large" 
                        variant="contained"
                        className="form-btn"
                        onClick={props.onClose}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};