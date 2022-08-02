//노드에서 멀티 스레드 방식으로 작업하는 방법

const{
    Worker, isMainThread, parentPort,
}=require('worker_threads');
//isMainThread를 통해 현재 코드가 메인스레드에서 실행되는지, 우리가 생성한 워커 스레드에서 실행되는지 구분
if(isMainThread){ //부모일 때,
    const worker = new Worker(__filename); //현재파일을 워커 스레드에서 실행
    worker.on('message',message=>console.log('from worker',message));
    worker.on('exit',()=>console.log('worker exit'));
    worker.postMessage('ping'); //워커에 데이터 보냄
}else{ //워커일 때
    parentPort.on('message',(value)=>{ //부모로부터 메세지를 받음
        console.log('from parent',value);
        parentPort.postMessage('pong');
        parentPort.close(); //부모와의 연결이 종료되면 worker.on('exit')가 실행
    });
}