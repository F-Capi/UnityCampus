const squares = document.querySelectorAll(".square");


const url = window.location.href.substring(0, window.location.href.length - 10) + "instructions.html?";
console.log(url);
//"http://127.0.0.1:5500/instructions.html?";


squares.forEach((square) => {
    square.addEventListener("click", (event) => {

        console.log(event.target.id);
        const searchParams = new URLSearchParams();
        searchParams.append("prjt", event.target.id);

        const queryString = searchParams.toString();
        window.location.href = url + queryString;
    });
});