import "./NoteList.css";
import { NoteTile } from "./NoteListTile";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import { loadNoteListThunk } from "../../store/slices/noteList/noteListSlice";
import { CircularProgress } from "@mui/material";

export const NoteList: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const noteList = useAppSelector((state: RootState) => state.noteList);
  const userId = useAppSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    if (userId) {
      dispatch(loadNoteListThunk({ userId }));
    }
  }, [dispatch, userId]);

  if (noteList.isLoading) {
    return <CircularProgress />
  }

  return (
    <>
      {noteList.data &&
        <div className="note-list">
          {(noteList.data.length > 0) 
              ? noteList.data.map(note => 
                <NoteTile 
                  key={note.id} 
                  title={note.title} 
                  content={note.content} 
                  date={note.lastModified} 
                  id={note.id}
                />)
              : <span>No notes created...</span>
          }
        </div>
      }
    </>
  )
}