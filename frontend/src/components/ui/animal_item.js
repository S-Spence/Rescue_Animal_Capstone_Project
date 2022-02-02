import { Link } from "react-router-dom";
import Card from "./card";
import "../../styles/animal.css";

export default function Animal(props){
  
  let image = "";

  if (props.animal.image != null && props.animal.image.length > 0){
    image = props.animal.image;
  }
  else{
    image = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg";
  }
  return (
     <Card>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
            <h3>{props.animal.name}</h3>
            <h4>{props.animal.age}</h4>
            <h4>{props.animal.breed}</h4>
            <h4>{props.animal.gender}</h4>
            <h4>Reserved: {props.animal.reserved}</h4>
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
