import "./NoteList.css";
import { INote } from "../../utils/interfaces";
import { NoteTile } from "./NoteListTile";

const mockedData: INote[] = [
  {title: 'Title', content: 'Content', lastModified: '25-04-2024', id: '1'},
  {title: 'Title2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', lastModified: '22-04-2024', id: '2'},
  {title: 'Title3', content: 'Lorem ipsum dolor', lastModified: '15-03-2024', id: '3'},
  {title: 'Title4', content: 'Lorem ipsum dolor sit amet', lastModified: '02-04-2024', id: '4'},
]
export const NoteList: React.FunctionComponent = () => {

  return (
    <>
      {mockedData &&
        <div className="note-list">
          {mockedData.map(tile =>
            <NoteTile 
              key={tile.id} 
              title={tile.title} 
              content={tile.content} 
              date={tile.lastModified} 
              />
          )}
        </div>
      }
    </>
  )
}