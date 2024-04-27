import { NoteTileFooter } from "./NoteListFooter";
import './NoteListTile.css';

interface INoteTile {
    title: string;
    content: string;
    date: string;
}

export const NoteTile: React.FunctionComponent<INoteTile> = props => {
    const {title, content, date} = props;

    return (
        <div className='note-tile'>
            <div className='note-title'>
                <h3>{title}</h3>
            </div>

            <p>{content}</p>
            
            <NoteTileFooter date={date} />
        </div>
    )
}