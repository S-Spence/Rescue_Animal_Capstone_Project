import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./ui/card";
import "../styles/animal.css";

export default function Animal(props){
    
  return (
     <Card>
        <div className="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg" alt="Placeholder" />
        </div>
        <div className="content">
            <h3>{props.animal.name}</h3>
            <h4>{props.animal.age}</h4>
            <h4>{props.animal.breed}</h4>
            <h4>{props.animal.color}</h4>
            <h4>{props.animal.outcome_type}</h4>
            <h4>{props.animal.gender}</h4>
            <h4>{props.animal.reserved}</h4>
        </div>
        <div className="actions">
            <button className="btn btn-link">
                <Link to={`/edit/${props.animal._id}`}>Edit</Link>
            </button>
            <button className="btn btn-link"
                onClick={() => {
                props.deleteAnimal(props.animal._id);
                }}
            >
            Delete
            </button>
        </div>
    </Card>
      
  );
}
