window.addEventListener('load',()=>{
    setTimeout(hide_s , 3000);
});
function hide_s()
{
    document.getElementById('splash').style.transform = "translate(-100%)";

}
function pop_frame(pop_head, pop_links)
{
document.getElementById('popup').innerHTML = `

<span class="ph">
    
`+pop_head+` </span> <button class="close" onclick="close_popup()"></button>
<iframe src="`+pop_links+`" frameborder="0"></iframe>

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