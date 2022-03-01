window.addEventListener('load',()=>{
    setTimeout(hide_s , 500);
});
function hide_s()
{
    x = 0;
    document.getElementById('splash').style.transform = "translate(-100%)";
    while (true){
    pass = prompt("Type Password");
    if (pass == "idk")
    {
        break;
    }
    else
    {
        if (x > 5)
        {
            alert("You have entered wrong password 5 times. This window will be closed now.");
            window.close();
        }
        x += 1;
        alert("Wrong Password");
    }}
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
    document.getElementById('popup').style.transform = "translate(100%)";    
    // document.getElementById('popup').style.visibility = "hidden";

}
function byebye()
{
    window.close();
}