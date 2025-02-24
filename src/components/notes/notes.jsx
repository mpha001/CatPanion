import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./notes.scss";
import debounce from "debounce";

function Notes() {
  const base_URL = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [notes, setNotes] = useState("");

  const getNotes = async () => {
    try {
      const response = await axios.get(`${base_URL}/${params.user_id}`);
      setNotes(response.data.notes);
    } catch (error) {
      console.log("Error fetching notes", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, [params.user_id]);

  const saveNotes = useCallback(
    debounce(async (updatedText) => {
      try {
        await axios.put(`${base_URL}/${params.user_id}`, {
          notes: updatedText,
        });
      } catch (error) {
        console.log("Error saving notes", error);
      }
    }, 3000),
    []
  );

  const handleUpdate = (e) => {
    const updatedText = e.target.value;
    setNotes(updatedText);
    saveNotes(updatedText);
  };

  return (
    <div className="notes">
      <textarea
        className="notes__text"
        value={notes}
        onChange={handleUpdate}
      ></textarea>
    </div>
  );
}
export default Notes;
