import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getDate } from "../../utils/helperFunctions";

export const getNoteList = (userId: string) => {
  const noteListRef = collection(db, userId);

  return getDocs(noteListRef);
}

export const createNote = (title: string, content: string, userId: string) => {
  const date = getDate();
  
  const noteListRef = collection(db, userId);

  return addDoc(noteListRef, {
    title,
    content,
    lastModified: date
  })
}

export const editNote = (title: string, content: string, userId: string, noteId: string) => {
  const noteRef = doc(db, userId, noteId);

  const date = getDate();

  return updateDoc(noteRef, {
    title,
    content,
    lastModified: date
  });
}

export const deleteNote = (userId: string, noteId: string) => {
  const noteRef = doc(db, userId, noteId);

  return deleteDoc(noteRef);
}

