import { Instruction } from "../models/Instruction.js"
import { data } from "./data.js"


//export const instructions = data.map(instruction => new Instruction(instruction.title, instruction.img, instruction.text));


function getUrlParams() {
    const url = window.location.href;
    const searchParams = new URL(url).searchParams;
    const entries = new URLSearchParams(searchParams).values();

    const array = Array.from(entries);
    return array[0];
}

export function getInstructions() {

    const id = getUrlParams();
    const instruction = data.find(({ name }) => name === id);
    const instructions = instruction.instructions.map(instruction => new Instruction(instruction.title, instruction.img, instruction.text, instruction?.code));
    console.log(instructions);
    return instructions;
}