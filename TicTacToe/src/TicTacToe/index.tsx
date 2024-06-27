import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import History from "./History";
import Board from "./Board";

import type { Squares } from "./types";
import HeaderMoves from "./History/HeaderMoves";

export default function Game() {
    const [ history, setHistory ] = useState<Array<Squares>>([Array(9).fill(null)]);
    const [ currentMove, setCurrentMove ] = useState(0);
    const [ inverted, setInverted ] = useState(false);

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Squares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    return (
        <View style= {styles.mainContainer}>
            <Board 
                xIsNext={ xIsNext }
                squares= { currentSquares }
                onPlay={ handlePlay }
                currentMove={ currentMove }
            />

            <View style= {styles.historyHeader}>
                <HeaderMoves 
                    isCurrentMove= { currentMove === 0 }
                    inverted= { inverted }
                    onChange= { setInverted }
                    onPress= { () => jumpTo(0) }
                />
            </View>

            <View style= {styles.historyBoard}>
                <History
                    history={ history }
                    currentMove={ currentMove }
                    inverted={ inverted }
                    jumpTo={ jumpTo }
                />
            </View>
        </View>
    )
}