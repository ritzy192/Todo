document.getElementById("inputfield").addEventListener("keypress",appendlist)
flag=0;
c=0;
function appendlist()
{
    if(event.keyCode===13)
    {
        count=1;
        var lis=document.createElement("li");
        if(flag===0)
            var inputvalue=document.getElementById("inputfield").value;
        else
        var inputvalue=temp2;
        
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
                    //  alert("please edit or add the item first");
                    var itm2=this.parentElement;
                    temp2=document.getElementById("inputfield").value;
                    // console.log(temp2);
                    document.getElementById("inputfield").value=itm2.innerText;
                    itm2.innerText=temp2;
                    // console.log(itm2);
                    var span3 = document.createElement("SPAN");
                    var txt3 = document.createTextNode("");
                    var span4 = document.createElement("Span");
                    var txt4 = document.createTextNode("");
                    span3.className="delete far fa-trash-alt";
                    span4.className="edit fas fa-edit";         
                    span3.appendChild(txt3);
                    span4.appendChild(txt4);
                    itm2.appendChild(span3);
                    itm2.appendChild(span4);
                    console.log(itm2);

                    flag=1;
                    c++;
                    // console.log(c);
                    count--;
                }
            }
        }
    }
}
