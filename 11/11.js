//  //keypress event
//  const body = document.querySelector("body");
//  body.addEventListener("keypress",(event)=>{
//      console.log(event);
//  })

//mouseover event

const btn = document.querySelector(".btn");
btn.addEventListener("mouseover",function(){
    console.log("mouseover even ocurred !!!");
});
btn.addEventListener("mouseleave",()=>{
    console.log("mouseleave even ocurred !!!");
});