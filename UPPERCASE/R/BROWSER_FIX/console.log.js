global.console=OBJECT({init:function(cls,inner,self){"use strict";var logWrapper,log;self.log=log=function(){var args=arguments,msg,p,count=0;msg="";EACH(args,function(arg,i){msg+=JSON.stringify(arg);if(i<args.length-1){msg+=", "}});if(logWrapper===undefined){logWrapper=DIV({style:{position:"fixed",left:0,bottom:0,backgroundColor:"#fff",color:"#000",width:"100%",zIndex:999999}}).appendTo(BODY)}logWrapper.append(p=P({style:{padding:2,borderTop:"1px solid #F0F0F0"},children:[SPAN({style:{fontWeight:"bold",color:"#999",marginRight:5},children:["UCONSOLE:"]}),msg]}));count+=1;logWrapper.show();DELAY(5,function(){p.remove();count-=1;if(count===0){logWrapper.hide()}})}}});