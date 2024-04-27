import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './NoteListFooter.css';

interface INoteTileFooter {
    date: string;
}

export const NoteTileFooter: React.FunctionComponent<INoteTileFooter> = props => {

    const onViewHandler = () => {
        console.log('view');
    }

    const onEditHandler = () => {
        console.log('edit');
    }

    const onDeleteHandler = () => {
        console.log('delete');
    }

    return (
        <div className='note-footer'>
            <div>{props.date}</div>
            
            <div className='note-actions'>
                <IconButton 
                    aria-label='view' 
                    size='small'
                    onClick={onViewHandler}
                >
                    <VisibilityOutlinedIcon fontSize='inherit' />
                </IconButton>

                <IconButton 
                    aria-label='edit' 
                    size='small'
                    onClick={onEditHandler}
                >
                    <EditOutlinedIcon fontSize='inherit' />
                </IconButton>
                
                <IconButton 
                    aria-label='delete' 
                    size='small'
                    onClick={onDeleteHandler}
                >
                    <DeleteOutlinedIcon fontSize='inherit' />
                </IconButton>
            </div>
        </div>
    )
}