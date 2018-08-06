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
    span.className="close";
    span.appendChild(txt);
    lis.appendChild(span);
    //click the close button:
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++)
     {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
}
