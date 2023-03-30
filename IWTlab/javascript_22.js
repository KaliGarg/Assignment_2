function gettable(n,m)
{
    document.write("<table style=height:400px;width:400px;>");
    for(i=1;i<=n;i++)
    {
        document.write("<tr>");
        for(j=1;j<=m;j++)
        {
            if((i+j)%2==0)
                clr='red';
            else
                clr='black';

            document.write("<td style=background-color:"+clr+"></td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
x=parseInt(prompt("Enter Number of rows:"));
y=parseInt(prompt("Enter number of columns :"));
gettable(x,y);