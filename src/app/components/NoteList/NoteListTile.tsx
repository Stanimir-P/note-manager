import { NoteTileFooter } from "./NoteListFooter";
import './NoteListTile.css';

interface INoteTile {
    title: string;
    content: string;
    date: string;
    id: string;
}

export const NoteTile: React.FunctionComponent<INoteTile> = props => {

    return (
        <div className='note-tile'>
            <div className='note-title'>
                <h3>{props.title}</h3>
            </div>

            <p>{props.content}</p>
            
            <NoteTileFooter noteId={props.id} date={props.date} />
        </div>
    )
}