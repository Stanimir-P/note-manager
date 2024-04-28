import "./CreateNoteForm.css";
import { useRef } from "react";
import { createNote } from "../../services/dataServices";
import { Button, Input, TextField } from '@mui/material';

interface ICreateNoteForm {
    onClose: () => void;
}

export const CreateNoteForm: React.FunctionComponent<ICreateNoteForm> = props => {
    const formRef = useRef(null);
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = e.currentTarget.noteTitle.value;
        const content = e.currentTarget.noteContent.value;

        createNote(title, content);
        
        if (formRef) {
            (formRef as unknown as HTMLFormElement).current.reset();
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form" ref={formRef} onSubmit={onSubmit}>
                <h2>Create Note</h2>

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

                <div className="create-note-footer">
                    <Button 
                        size="large" 
                        variant="contained"
                        type="submit"
                        className="form-btn"
                    >
                        Create
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