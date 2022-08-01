setImmediate(()=>{
    console.log('즉시 실행할꺼임');  //즉시 처리
});

process.nextTick(()=>{
    console.log('응~ 그래도 내가먼저'); //우선 처리
});

setTimeout(()=>{
    console.log('timeout~~');  
},0);   //0초 후 실행

Promise.resolve().then(()=>console.log('promise')); //우선처리,nextTick보다 앞에써도 걔보단 뒤에 나옴