"use client";
import { TickTackToeSquare, TickTackToeSquareList } from "./models/enums/tick-tack-toe-square.enum";


export default function Home() {

    const board: TickTackToeSquare[] = [];
    for (let i = 0; i < 9; i++) {
        board.push(TickTackToeSquareList.EMPTY);
    }

    let currentPlayer = TickTackToeSquareList.X;
    const onSquareIndexClicked = (squareIndex: number) => {
        console.log(squareIndex);

        // Check for winner. If game is over, end game.

        // Toggle player.
    };

    const rows = [];
    for (let i = 0; i < 3; i++) {
        const row = [];

        for (let j = 0; j < 3; j++) {
            const index = (i * 3) + j;
            row.push(<Square squareValue={board[index]} onSquareClicked={() => onSquareIndexClicked(index)}></Square>);
        }

        rows.push(<div className="centerItems">{row}</div>);
    }

    return (
        <div className="center-items full-height-and-width">
            <div>{rows}</div>
        </div>
    );
}

function Square({ squareValue, onSquareClicked }: { squareValue: TickTackToeSquare, onSquareClicked: () => void }) {
    return (
        <button className="square" onClick={onSquareClicked}>
            {squareValue}
        </button>
    );
}