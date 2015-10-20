export default  React => (props) => {
    return <div className="catalog">
                <ul>
                    {props.items.map((item)=> <li className="product" >{item}</li>)}
                </ul>
            </div>;
};
