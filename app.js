const net = require("net");

let client = net.connect({port:9999, host:'localhost'},()=>{
    console.log('서버와 연결되었습니다');
});


