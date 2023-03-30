VV=document.getElementById("B1");
randomNo=Math.ceil(Math.random()*1000+5);
op=document.getElementById("output");

function checkno()
{
    ip=document.getElementById("inp").value;

    if(randomNo==ip)
    {
        op.innerHTML="YOU GOT THE NUMBER";
    }
    else if(randomNo<ip)
    {
        op.innerHTML="HIGH!!!";
    }
    else
    {
        op.innerHTML="LOW!!!";
    }
}