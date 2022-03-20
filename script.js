function click_login(){
    hide_s();
}
function hide_s()
{
    x = 0;
    document.getElementById('splash').style.transform = "translate(-100%)";
    while (true){
    pass = prompt("Type Password");
    if (pass == "gk")
    {
        break;
    }
    else
    {
        alert("Wrong Password");
    }
}
}
function pop_frame(pop_head, pop_links)
{
document.getElementById('popup').innerHTML = `

<span class="ph">
    
`+pop_head+` </span> <button class="close" onclick="close_popup()"></button>
<iframe width="560" height="315" src="`+pop_links+`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

`;
// document.querySelector('.ph').style = "visibility: visible";
// document.getElementById('popup').style.visibility = "visible";
document.getElementById('popup').style.transform = "scale(1)";
}
function close_popup()
{
    document.getElementById('popup').style.transform = "scale(0)";    
    // document.getElementById('popup').style.visibility = "hidden";

}
function byebye()
{
    window.close();
}