function anim(start, end, id ,dui){
    if(start===end)return;
    var current = start;
    var incr=end>start?1:-1;
    var rang =end-start;
    var step=Math.abs(Math.floor(dui/rang));
    var obj=document.getElementById(id);
    var timer=setInterval(function(){
        current+=incr;
        obj.innerHTML=current;
        if(current==end){
            clearInterval(timer);
        }
    },step)
}
let targ=document.querySelector(".timer")
let obc=new IntersectionObserver(function(ent){
    if(ent[0].intersectionRatio==1){
        anim(0, 500 ,"value1",50);
        anim(0, 9,"fir1",1000);
        anim(0, 850,"value2",50);
        anim(0, 12,"fir2",1000);
        anim(0, 650,"value3",50);
        anim(0, 3,"fir3",900);
        anim(0, 400,"value4",50);
        anim(0, 20,"fir4",2000);
        
        obc.unobserve(targ);

    }
},{root:null,threshold:[1]});
obc.observe(targ);
let loading=document.querySelector(".loading");
setTimeout(function(){
    loading.style.display="none";
    document.body.style.overflow="visible";
},3003)