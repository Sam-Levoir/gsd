import { TickTackToeSquare, TickTackToeSquareList } from "./models/enums/tick-tack-toe-square.enum";
import { Square } from "./page";



export default function Home() {

    const board: TickTackToeSquare[] = [];
    for (let i = 0; i < 9; i++) {
        board.push(TickTackToeSquareList.EMPTY);
    }

    const onSquareClicked = (squareIndex) => {
    };

    return (
        <div className="center-items full-height-and-width">
            <div>Hello World!</div>
            <Square></Square>
        </div>
    );
}
