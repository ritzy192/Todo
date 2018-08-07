function appendlist()
{
    var lis=document.createElement("li");
    var inputvalue=document.getElementById("inputfield").value;
    var t=document.createTextNode(inputvalue);
    document.getElementById("inputfield").value="";
    lis.appendChild(t);
    if(inputvalue === '')
        alert("please enter a todo!");
    else
        document.getElementById("yourlist").appendChild(lis);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="delete";
    span.appendChild(txt);
    lis.appendChild(span);
    //click the close button:
    var del = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < del.length; i++)
     {
        del[i].onclick = function() {
        var item = this.parentElement;
        item.style.display = "none";
    }
    }
}
