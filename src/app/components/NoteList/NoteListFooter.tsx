import React from 'react';
import './NoteListFooter.css';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Backdrop } from '@mui/material';
import { NoteActionsForm } from '../Forms/NoteActions';

interface INoteTileFooter {
    date: string;
}

export const NoteTileFooter: React.FunctionComponent<INoteTileFooter> = props => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
  
    const handleClose = (): void => {
        setIsOpen(false);
    };
  
    const onEditHandler = (): void => {
        setIsOpen(true);
    };

    const onDeleteHandler = () => {
        console.log('delete');
    }

    return (
        <div className='note-footer'>
            <div>{props.date}</div>
            
            <div className='note-actions'>
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

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpen}
            >
                <NoteActionsForm formType="edit" onClose={handleClose} />
            </Backdrop>
        </div>
    )
}