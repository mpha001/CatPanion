import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./notes.scss";

function notes() {
  const base_URL = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get(`${base_URL}/${params.user_id}`);
      setNotes(response.data);
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  };

  useEffect(() => {
    getNotes(params.user_id);
  }, [params.user_id]);

  return (
    <>
      <div className='notes'>
        <ul>
          <li key={notes.user_id}>
            <textarea className='notes__text'>{notes.notes}</textarea>
          </li>
        </ul>
      </div>
    </>
  );
}

export default notes;
