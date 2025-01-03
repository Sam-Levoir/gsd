export enum TickTackToeSquareList {
    EMPTY = "EMPTY",
    X = "X",
    O = "O",
}

export type TickTackToeSquare = keyof typeof TickTackToeSquareList;