// --- window_size ---
// [1] [2] [3] [4] [5] ... [100] [101] [102] [103] [104] ... [500] [501] [502] [503] [504] [505]
// ------ first ------     ------------ middle ---------     -------------- last ---------------
var paginate = require('..'), p;

p = paginate({count_elements: 1000});
console.log(p.render({url: '/users/%N'}));

p = paginate({count_elements: 500});
console.log(p.render({url: '/users/%N'}));

p = paginate({count_elements: 10});
console.log(p.render({url: '/users/%N'}));

p = paginate({count_elements: 1000});
console.log(p.render({url: '/users/%N', page: 6}));

p = paginate({count_elements: 700});
console.log(p.render({url: '/users/%N', page: 6}));

p = paginate({count_elements: 600});
console.log(p.render({url: '/users/%N', page: 6}));

p = paginate({count_elements: 10});
console.log(p.render({url: '/users/%N', page: 6}));

p = paginate({count_elements: 1000});
console.log(p.render({url: '/users/%N', page: 7}));

p = paginate({count_elements: 800});
console.log(p.render({url: '/users/%N', page: 7}));

p = paginate({count_elements: 700});
console.log(p.render({url: '/users/%N', page: 7}));
