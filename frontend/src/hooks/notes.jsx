import { createContext, useState, useContext, useEffect } from "react";
import { getNotes } from "../services/notes";
import { useAuth } from "./auth";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const { user } = useAuth();
  const [notes, setNotes] = useState(null);
  const [title, setTitle] = useState("");

  async function updateNotes() {
    const newNotes = await getNotes(title);
    setNotes(newNotes);
  }

  useEffect(() => {
    if (user) {
      updateNotes();
    }
  }, [title]);

  return (
    <NotesContext.Provider value={{ title, notes, setTitle, updateNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export function useNotes() {
  return useContext(NotesContext);
}
