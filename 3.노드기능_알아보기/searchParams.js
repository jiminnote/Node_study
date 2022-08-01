const {URL}=require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams:',myURL.searchParams)
console.log('searchParams.getAll():',myURL.searchParams.getAll('category')); //키에 해당하는 모든 값
console.log('searchParams.get():',myURL.searchParams.get('limit')); //키에 해당하는 첫 번째 값
console.log('searchParams.has():',myURL.searchParams.has('page')); //해당 키의 유무

console.log('searchParams.keys():',myURL.searchParams.keys()); //모든 키의 iterator 객체를 가져옴
console.log('searchParams.values():',myURL.searchParams.values()); //모든 값의 iterator 객체를 가져옴

myURL.searchParams.append('filter','es3'); //키 추가
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6'); //같은 키의 값 모두 지우고 새로 추가
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); //해당 키 제거
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():',myURL.searchParams.toString()); //조작한 searchParams 객체를 다시 문자열로 만듬
myURL.search=myURL.searchParams.toString(); 