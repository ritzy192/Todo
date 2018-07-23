var count=1;
var c1=1;
var c2=1;

function appendlist()
{
    var ul=document.getElementById("yourlist");
    var item=document.getElementById("inputfield");
    var li=document.createElement("li");
    // var icon=document.createElement("i");
    
    // icon.setAttribute('class',"far fa-trash-alt");
    // icon.setAttribute('id',count++);
    // icon.style.color="red";
    li.setAttribute('id',"list"+count++);
    li.appendChild(document.createTextNode(item.value));
    //li.prefix(document.createTextNode(item.value));
    // li.appendChild(icon);
    
    var butdel=document.createElement("button");
    butdel.innerHTML="Delete";
    butdel.setAttribute('class',"listbuttons");
    // butdel.style.backgroundColor="black";
    // butdel.style.color="red";
    // butdel.style.fontSize="15px";
    // butdel.style.width="100px";


    var butedit=document.createElement("button");
    butedit.innerHTML="Edit";   
    butedit.setAttribute('class',"listbuttons");
    // butedit.style.backgroundColor="black";
    // butedit.style.color="yellow";
    // butedit.style.fontSize="15px";
    // butedit.style.width="100px";
    
    li.appendChild(butdel);
    li.appendChild(butedit);
    
    li.style.height="100%";
    li.style.paddingTop="10px";
    li.style.paddingBottom="10px";
    li.style.fontSize="20px";
    li.style.borderStyle="double";
    li.style.marginBottom="2%";

    document.getElementById("inputfield").value="";
    ul.appendChild(li);
}
