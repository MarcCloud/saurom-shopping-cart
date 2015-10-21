export default React => (props) =>{
    return <div className="product">
                <img src= {props.image} width="100" height= "100"alt=""/>
                <span className="name">{props.name}</span>
                <span className="description">{props.description}</span>
                <span className="price">{props.price}</span>
            </div>;
}