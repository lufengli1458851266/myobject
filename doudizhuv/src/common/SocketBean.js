
export default class SocketBean { 
  static getSingleTon() { 
    if (!SocketBean.instance) { 
      SocketBean.instance = new SocketBean(); 
    } 
    return SocketBean.instance; 
  }
  constructor() { 
      
  }
  init(uobj,self){
    this.pomelo = window.pomelo;
      let host = "127.0.0.1";
      let port = "3010";

        this.pomelo.init({
          host: host,
          port: port,
          log: true
        }, ()=>{
          //pomelo.disconnect(); //关闭连接
        this.pomelo.notify('connector.roomHandler.enterRoom',uobj);
        // pomelo.request("connector.entryHandler.entry", {uid:3,uname:'zhangsan'}, function(data) {
        //     alert(data.name);
        //   });
        this.pomelo.on('enterRoom', function(seat){
              for(let i=0;i<3;i++){
                self.$refs.roomready.setSeat(i,'');
              }
              for(let key in seat){
                self.$refs.roomready.setSeat(key,seat[key].nicheng);
              }
              
            });
          //-----------------------------------------
        this.pomelo.on('fullRoom', function(data){
              alert('客满');
              self.$router.push('/gamehill');
            });
          //------------被动离开------------------
        this.pomelo.on('leave', function(data){
              alert(data);
              self.$router.push('/hill');
            });
        });
        
  }
  sendReady(){
    this.pomelo.notify('connector.roomHandler.ready',{});
    this.pomelo.on('ready', function(data){
              //把准备按钮改为已准备
              alert(data);
            });
  }
  closeConnect(){
    this.pomelo.disconnect();
  }
} 