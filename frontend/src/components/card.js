

export default function Card(props){
    return (
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Age: {props.age}</p>
                <p class="card-text">Status: {props.outcome_type}</p>
            </div>
        </div>
    );

}
