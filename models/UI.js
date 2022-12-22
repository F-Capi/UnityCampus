
export class UI {
    showTitle(text) {
        const title = document.querySelector(".title");
        title.innerHTML = text;
    }
    showImg(text) {
        const img = document.querySelector(".image");
        img.src = text;
    }
    showParagraph(text) {
        const paragraph = document.querySelector(".paragraph");
        paragraph.innerHTML = text;
    }
}