import { View } from "react-native";

import styles from "../styles";
import Square from "./Square";
import type { Squares } from "../types";

type PlayBoardProps = {
    squares: Squares
    handleClick: (i: number) => void
    winSquares?: Array<number>
}
export default function PlayBoard({ squares, handleClick, winSquares }: PlayBoardProps) {
    function renderBoard() {
        const board = []
        for (let row_i = 0; row_i < 3; row_i++) {
            board.push(
                <View 
                    key={ 'boardRow_' + row_i }
                    style= {styles.boardRow} 
                >
                    { renderRow(row_i) }
                </View>
            )
        }
        return board
    }
    function renderRow(i: number) {
        const boardRow = [];
        for (let j = 0; j < 3; j++) {
            const index = (i * 3) + j;
            boardRow.push(
                <Square 
                    key={ 'square_' + (index) }
                    value= { squares[index] }
                    onSquareClick={ () => handleClick(index) }
                    isWinSquare= { winSquares?.includes(index) }
                />
            )
        }
        return boardRow
    }
    return renderBoard()
}