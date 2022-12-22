
import { Project } from "./models/Project.js"
import { UI } from "./models/UI.js"
import { getInstructions } from "./data/Instructions.js"

const renderPage = (proj, ui) => {
    ui.showParagraph(proj.getCurrentInstruction().text);
    ui.showImg(proj.getCurrentInstruction().gif);
    ui.showTitle(proj.getCurrentInstruction().title);
}

function main() {
    const instructions = getInstructions();
    const proj = new Project(instructions);
    const ui = new UI();
    renderPage(proj, ui);
    const left = document.querySelector(".arrow-left");
    const right = document.querySelector(".arrow-right");
    left.addEventListener("click", () => {
        proj.previousInstruction();
        renderPage(proj, ui);
    });
    right.addEventListener("click", () => {
        proj.nextInstruction();
        renderPage(proj, ui);
    });
}

main()