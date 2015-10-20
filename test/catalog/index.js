import test from 'blue-tape';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import $ from 'cheerio';
import catalogFactory from '../../app/catalog';

const catalog = catalogFactory(React);

test('Catalog should be a list of 3 .product items', expect => {
    const component = catalog({items: [1, 2, 3]});
    const html = render(component);
    expect.equal($('.product', html).length, 3);
    expect.end();
});
