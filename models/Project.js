import { Instruction } from "./Instruction.js";

export class Project {

    /**
     * 
     * @param {Instruction[]} instructions 
     */
    constructor(instructions) {
        this.instructions = instructions;
        this.index = 0;
    }
    getCurrentInstruction() {
        return this.instructions[this.index]
    }

    nextInstruction() {
        if (this.index != this.instructions.length - 1) {
            this.index++;
        }
    }

    previousInstruction() {
        if (this.index != 0) {
            this.index--;
        }
    }
}