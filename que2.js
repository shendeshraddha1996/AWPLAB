function submit(submitbtn){
   var s = submitbtn.parentElement.parentElement.children[3].children[0] ;
    var c = s.cloneNode(true);

   // var newelement =submitbtn.parentElement.parentElement.children[3].children[0];
    

    var username= s.children[0].innerHTML;
    username=submitbtn.parentElement.parentElement.children[3].children[0].children[0].value;

    var password = newelement.children[1];
    password.innerHTML=password.value;

        c.appendChild(username);
    // var password= newelement.children[1];
   //console.log(c);
}