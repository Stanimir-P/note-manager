import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNote, deleteNote, editNote, getNoteList } from '../../../services/dataServices';
import { getDate } from '../../../utils/helperFunctions';
import { INote } from '../../../utils/interfaces';

export const loadNoteListThunk = createAsyncThunk(
  'noteList/loadNoteList',
  async (payload: {userId: string}) => {
    const { userId } = payload;
    const noteList: INote[] = [];

    const response = await getNoteList(userId);
    response.forEach(note => {
      // @ts-expect-error not relevant linter error
      const noteItem: INote = {...note.data(), id: note.id};

      noteList.push(noteItem)
    });
    
    return {...response, noteList};
  },
);

interface ICreateNoteProps {
  title: string,
  content: string,
  userId: string,
  onFormClose: () => void
}

export const createNoteThunk = createAsyncThunk(
  'noteList/createNote',
  async (payload: ICreateNoteProps) => {
    const { title, content, userId, onFormClose } = payload;
    const date = getDate();
    
    const response = await createNote(title, content, userId);
    const newNote = { title, content, lastModified: date, id: response.id }
    
    return {...response, newNote, onFormClose};
  },
);

interface IEditNoteProps extends ICreateNoteProps {
  noteId: string;
}

export const editNoteThunk = createAsyncThunk(
  'noteList/editNote',
  async (payload: IEditNoteProps) => {
    const { title, content, userId, noteId, onFormClose } = payload;
    const date = getDate();
    
    await editNote(title, content, userId, noteId);
    
    const updatedNote = { title, content, lastModified: date, id: noteId }
    
    return {updatedNote, onFormClose};
  },
);

export const deleteNoteThunk = createAsyncThunk(
  'noteList/deleteNote',
  async (payload: { userId: string, noteId: string }) => {
    const { userId, noteId } = payload;
    
    await deleteNote(userId, noteId);
    
    return { noteId };
  },
);

interface NoteListState {
    data: INote[] | null;
    isLoading: boolean;
    error?: string | null;
}

const initialState: NoteListState = {
    data: null,
    isLoading: false,
    error: null
}

export const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadNoteListThunk.fulfilled, (state, action) => {
      state.data = action.payload.noteList;
      state.isLoading = false;
    })

    builder.addCase(loadNoteListThunk.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(loadNoteListThunk.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    })

    builder.addCase(createNoteThunk.fulfilled, (state, action) => {
      state.data?.push(action.payload.newNote);
      alert('New note has been created!');
      action.payload.onFormClose();
    })

    builder.addCase(createNoteThunk.rejected, (state, action) => {
        state.error = action.error.message;
    })

    builder.addCase(editNoteThunk.fulfilled, (state, action) => {
      if (!state.data) { return; }

      const findNote = (element: INote) => element.id === action.payload.updatedNote.id;
      const noteIndex = state.data.findIndex(findNote);
      state.data[noteIndex] = action.payload.updatedNote;
      
      alert(`Note has been updated!`);
      action.payload.onFormClose();
    })

    builder.addCase(editNoteThunk.rejected, (state, action) => {
        state.error = action.error.message;
    })

    builder.addCase(deleteNoteThunk.fulfilled, (state, action) => {
      if (!state.data) { return; }
      const findNote = (element: INote) => element.id === action.payload.noteId;
      const noteIndex = state.data.findIndex(findNote);
      const title = state.data[noteIndex].title;

      state.data.splice(noteIndex, 1);
      
      alert(`Note "${title}" has been deleted!`);
    })

    builder.addCase(deleteNoteThunk.rejected, (state, action) => {
      state.error = action.error.message;
  })
  }
})

export default noteListSlice.reducer;