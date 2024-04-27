import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { INote } from "../../utils/interfaces";

export const getNoteList = (userId: string) => {
    const noteListRef = collection(db, userId);
    const noteList: INote[] = [];
  
    getDocs(noteListRef)
      .then(snapshot => {
        snapshot.forEach(note => noteList.push({ ...note.data() as any, id: note.id }));
      })
      .catch(err => console.log(err.message));
  
      return noteList;
  }
  