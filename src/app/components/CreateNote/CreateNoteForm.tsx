import "./CreateNoteForm.css";
import { Button, Input, TextField } from '@mui/material';

interface ICreateNoteForm {
    onClose: () => void;
}

export const CreateNoteForm: React.FunctionComponent<ICreateNoteForm> = props => {
    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={console.log}>
                <h2>Create Note</h2>

                <TextField
                    name="title"
                    label="Title"
                    variant="standard"
                    fullWidth
                    className="form-field"
                />

                <Input 
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