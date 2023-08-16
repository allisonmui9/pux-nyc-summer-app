import AddIcon from '@mui/icons-material/Add';
import Axios from "axios";
import { useState } from "react";

export default function Form( { handleClose }) {
    // variables for forms 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateLocation = (e) => {
        setLocation(e.target.value);
    }

    const updateImage = (e) => {
        setImage(e.target.value);
    }

    const updateCategory = (e) => {
        setCategory(e.target.value);
    }

    const updateStatus = (e) => {
        setStatus(e.target.value);
    }

    const item = {
        title: title,
        description: description, 
        location: location, 
        image: image,
        category: category,
        status: status,
    }


    const addToList = () => {
        console.log('adding');
        handleClose();
        Axios.post("http://localhost:3001/add", item)
    }


    return (
        <div className="modal">
          <div>
            <h2>Add adventure</h2>
            <p className="mt-8">What NYC adventure are you going to do this summer?</p>
            <div className="mt-24">
              <div>
            <p className="semibold">Title</p>
            <input type="text" placeholder="Picnic at Central Park" value={title} onChange={(e) => updateTitle(e)}></input>
            </div>
            <div className="mt-24">
            <p className="semibold">Description</p>
            <textarea type="text" placeholder="Bring cheese, strawberries, sandwiches, and speakers." resize="none" value={description} onChange={(e) => updateDescription(e)}></textarea>
            </div>
            <div className="mt-24">
            <p className="semibold">Location</p>
            <input type="text" placeholder="Uptown East & West" value={location} onChange={(e) => updateLocation(e)}></input>
            </div>
            <div className="mt-24">
            <p className="semibold">Image Link</p>
            <input type="text" placeholder="https://" value={image} onChange={(e) => updateImage(e)}></input>
            </div>
            <div className="mt-24">
            <p className="semibold">Cateogry</p>
            <select type="dropdown" value={category} onChange={(e) => updateCategory(e)}>
              <option value="none">Select category</option>
              <option value="outdoor">Outdoor</option>
              <option value="musuems">Museums</option>
              <option value="events">Events</option>
              <option value="food">Food</option>
            </select>
            </div>
            <div className="mt-24">
            <p className="semibold">Status</p>
            <select type="dropdown" value={status} onChange={(e) => updateStatus(e)}>
              <option value="none">Select status</option>
              <option value={true}>Completed</option>
              <option value={false}>Not completed</option>
            </select>
            </div>
            </div>
            <div className="mt-24">
              <button className="flex" onClick={addToList}>
              <div><AddIcon fontSize='small'/></div>
              <p className="ml-4">Add adventure</p>
              </button>
            </div>
          </div>
        </div>
    )
    
}