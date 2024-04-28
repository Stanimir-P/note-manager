import "./NoteActionsForm.css";
import { Button, Input, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNoteThunk, editNoteThunk } from "../../../store/slices/noteList/noteListSlice";
import { RootState } from "../../../store";
import { validateNote } from "../../../utils/helperFunctions";

interface INoteActionsForm {
    noteId?: string;
    onClose: () => void;
}

export const NoteActionsForm: React.FunctionComponent<INoteActionsForm> = props => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state: RootState) => state.auth.userId);
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!userId) { return; }

        const title: string = e.currentTarget.noteTitle.value;
        const content: string = e.currentTarget.noteContent.value;
        const payload = { title, content, userId, onFormClose: props.onClose };

        const errorMessage = validateNote(title, content);

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        if (props.noteId) {
            dispatch(editNoteThunk({...payload, noteId: props.noteId}));
        } else {
            dispatch(createNoteThunk(payload));
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={onSubmit}>
                {props.noteId 
                    ? <h2>Edit Note</h2>
                    : <h2>Create Note</h2>
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
                        {props.noteId ? 'edit' : 'create'}
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