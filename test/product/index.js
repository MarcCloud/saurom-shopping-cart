import test from 'blue-tape';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import $ from 'cheerio';
import productFactory from '../../app/product';

const product = productFactory(React);

test('Product should have image, name, description and price displayed', expect =>{
    const model = {image: 'sword.png', name: 'Broadsword', description: 'Big and sharp', price: 15 };
    const component = product(model);
    const html = render(component);

    expect.equal($('img', html).attr('src'), model.image);
    expect.equal($('span.name', html).text(), model.name);
    expect.equal($('span.description', html).text(), model.description);
    expect.equal($('span.price', html).text(), model.price.toString());
    expect.end();
});
