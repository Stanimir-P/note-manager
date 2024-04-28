import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { INote } from "../../utils/interfaces";
import { getDate } from "../../utils/helperFunctions";

export const getNoteList = (userId: string): INote[] => {
  const noteListRef = collection(db, userId);
  const noteList: any[] = []; // CHANGE TYPE

  getDocs(noteListRef)
    .then(snapshot => {
      snapshot.forEach(note => noteList.push({ ...note.data(), id: note.id }));
    })
    .catch(err => console.log(err.message));

  return noteList;
}

export const createNote = (title: string, content: string) => {
  const date = getDate();
  const noteListRef = collection(db, 'asd');

  addDoc(noteListRef, {
    title,
    content,
    date
  })
  .then((result) => {
    console.log(result);
  })
}

export const deleteNote = () => {
  const noteRef = doc(db, 'asd', 'eMCntj5QuWjyMQPHmFzd');

  deleteDoc(noteRef)
    .then(() => {})
}

export const editNote = (title: string, content: string) => {
  const noteRef = doc(db, 'asd', 'fbjpBpD38JREESHmsydr');

  const date = getDate();

  updateDoc(noteRef, {
    title,
    content,
    date
  });
}