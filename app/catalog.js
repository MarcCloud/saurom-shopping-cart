import productFactory from './product';

export default React => (props) => {
    const product = productFactory(React);
    return <div className="catalog">
                <ul>
                    {props.items.map((item)=> <li>{product(item)}</li>)}
                </ul>
            </div>;
};
