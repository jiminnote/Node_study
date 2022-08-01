const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그입니다, 로그,로그')
console.log(string,number,boolean);
console.error('ERROR_MESSAGE')

console.table([{name:'정지민',birth:1997},{name:'김인겸',birth:1998}]);

console.dir(obj, {colors:false, depth:2});
console.dir(obj, {colors:true, depth:1});

console.time('시간 측정');
for (let i = 0; i < 100000; i++){}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
};
a();
console.timeEnd('전체 시간');