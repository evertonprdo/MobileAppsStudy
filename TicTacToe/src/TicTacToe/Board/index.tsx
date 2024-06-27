import { Text, View } from "react-native";

import styles from "../styles";
import PlayBoard from "./PlayBoard"

import type { Squares } from "../types";

function calculateWinner(squares: Squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const line of lines) {
        const [ a, b, c ] = line
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                line: line,
                winner: squares[a]
            }
        }
    }
    return null;
}

type BoardProps = {
    currentMove: number
    xIsNext: boolean;
    squares: Squares;
    onPlay: (nextSquares: Squares) => void
}
export default function Board({ currentMove ,xIsNext, squares, onPlay }: BoardProps) {
    const winner = calculateWinner(squares);
    let status = winner ?
        "Winner: " + winner.winner
        :  currentMove === 9 ? "Draw"
        : "Next player: " + (xIsNext ? "X" : "O")
    ;

    function handleClick(i: number): void {
        if(squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    return (
        <>
            <View style={ styles.infoContainer }>
                <Text style= { styles.infoText }>{ status }</Text>
            </View>

            <View style= {styles.boardPlay}>
                <PlayBoard
                    squares={ squares }
                    handleClick={ handleClick }
                    winSquares={ winner?.line }
                />
            </View>
        </>
    )
}