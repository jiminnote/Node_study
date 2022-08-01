console.log('require이 가장 위에 오지 않아도 된다.');

module.exports = '나를 찾아봐';

require('./var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main');
console.log(require.main=== module);
console.log(require.main.filename);
