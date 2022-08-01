const url = require('url');

const {URL} = url;
const myURL = new URL('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
console.log('new URL():',myURL)
console.log('url.format():',url.format(myURL));

console.log('-----------------------------------------');
const parseUrl = url.parse('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
console.log('url.parse():',parseUrl)
console.log('url.format():',url.format(parseUrl));
