import React from "react";
import { NoteList } from "../NoteList/NoteList";
import { CreateNote } from "../CreateNote/CreateNote";

export const NoteListContent: React.FunctionComponent = () => {

    return (
        <div className="notes-content">
            <CreateNote />

            <NoteList />
        </div>
    )
}