# paginate-js
Paginate whatever you want, client and server side

## Instalation

If you are using nodejs/npm:

    npm install paginate-js

If you are using any other js environment:

    git clone git://github.com/masylum/paginate-js.git

## Usage

This module provides a simple API to paginate whatever you need to paginate:

    var paginator = require('paginate-js')({count_elements: 1000});

    paginator.render({url: '/users/%N'});

## API

On creating paginators you can pass the following options:

* `count_elements`: Number of total elements.
* `elements_per_page[100]`: Number of elements shown per page.
* `window_size[6]`: Threshold of shown pages before your insert a middle thing... hard to explain.

### render

Returns the html given the following `options`:

* `url`: Url to paginate. Page number is interpolated using `%N`.
* `page`[1]: Page number you are. `1` is the first.
* `div_class`[paginator]: Css class for the div.
* `nextprev_class`[nextprev]: Css class for the next and previous links.
* `current_class`[current]: Css class for the current_page.
* `next_text`[Next »]: Text for the next link.
* `previous_text`[« Previous]: Text for the previous link.

## Examples / test

You can see this module usage at `examples/index.js`

## License

(The MIT License)

Copyright (c) 2011 Pau Ramon <masylum@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
