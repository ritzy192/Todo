document.getElementById("inputfield").addEventListener("keypress",appendlist)

function appendlist()
{
    if(event.keyCode===13)
    {
    count=1;
    var lis=document.createElement("li");
    var inputvalue=document.getElementById("inputfield").value;
    var t=document.createTextNode(inputvalue);
    document.getElementById("inputfield").value="";
    lis.appendChild(t);
    if(inputvalue === '')
        alert("please enter a todo!");
    else
        document.getElementById("yourlist").appendChild(lis);
    var span1 = document.createElement("SPAN");
    var txt = document.createTextNode("");
    var span2 = document.createElement("Span");
    var txt2 = document.createTextNode("");
    span1.className="delete far fa-trash-alt";
    span2.className="edit fas fa-edit";         
    span1.appendChild(txt);
    span2.appendChild(txt2)
    lis.appendChild(span2);
    lis.appendChild(span1);

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
    var edt = document.getElementsByClassName("edit");
    var j;
    for(j=0;j<edt.length;j++)
    {
        edt[j].onclick=function()
        {
            count++;
            if(count%2===0)
            {
                var itm=this.parentElement;
                document.getElementById("inputfield").value=itm.innerText;
                itm.style.display="none";
            }
            else
            {
                 alert("please edit or add the item first");

                count--;
            }
        }
    }
}
}
