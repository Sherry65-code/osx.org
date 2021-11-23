function pho()
{
    document.getElementById('main').innerHTML += `<br><br>
    <img src="img1.png">
    <img src="img2.png">
    <img src="img3.png">
    `;
    var scroll = setInterval(function(){ window.scrollBy(0,1000); }, 2000);
}
