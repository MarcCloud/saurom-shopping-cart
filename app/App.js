import catalogFactory from './catalog';

export default React => (model)=>{
    const catalog = catalogFactory(React);
    const {items, message} = model;
    return <section>
                <header>
                    <h1>{ message + '!!' }</h1>
                </header>
                <div>
                    {catalog({items})}
                </div>
            </section>;
};
