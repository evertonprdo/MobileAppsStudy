import React, { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

export default function TicTacToe() {
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

    function renderMoveButton(move: number, isCurrentMove: boolean, description?: string) {
        description ??= isCurrentMove ?  "You are at move #" + move : "Go to move #" + move
        return (
            <Pressable 
                key={ "Move_" + move }
                onPress={ () => jumpTo(move) }
                style= {[
                    move === 0 ? styles.boardHistoryHeaderButton : styles.boardHistoryButton,
                    { backgroundColor: isCurrentMove ? '#eee' : 'white'}
                ]}
                disabled= { isCurrentMove }
            >
                <Text>{ description }</Text>
            </Pressable>
        )
    }

    function MovesComponents() {
        const Moves: React.JSX.Element[]  = []

        history.map((_, i) => {
            if (i !== 0) {
                Moves.push(renderMoveButton(i, i === currentMove));
            }
        })
        return inverted ? Moves.slice().reverse() : Moves
    } 

    return (
        <View style= {{flex: 1}}>
            <View style= {{flex: 3}}>
                <Board 
                    xIsNext={xIsNext}
                    squares= {currentSquares}
                    onPlay={ handlePlay }
                />
            </View>

            <View style= {styles.boardHistoryHeader}>
                <View style= {styles.switchBoardHistoryheader}>
                    <Text style= {styles.boardInfoText}>ReverseOrd: </Text>
                    <Switch
                        value= {inverted}
                        onValueChange={ setInverted }
                    />
                </View>
                { renderMoveButton(0, currentMove === 0, "Get to Game Start") }
            </View>

            <View style= {styles.boardHistory}>
                <MovesComponents/>
            </View>
        </View>
    )
}

type BoardProps = {
    xIsNext: boolean;
    squares: Squares;
    onPlay: (nextSquares: Squares) => void
}
function Board({ xIsNext, squares, onPlay }: BoardProps) {

    const winner = calculateWinner(squares);
    let status = winner ?
        "Winner: " + winner
        : "Next player: " + (xIsNext ? "X" : "O")
    ;

    function handleClick(i: number): void {
        if(squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    function renderRow(i: number) {
        const boardRow = [];

        for (let j = 0; j < 3; j++) {
            const colIndex = (i * 3) + j;
            boardRow.push(
                <Square 
                    key={ 'square_' + (colIndex) }
                    value={ squares[colIndex] }
                    onSquareClick={ () => handleClick(colIndex) }
                />
            )
        }
        return boardRow
    }

    return (
        <>
            <View style={ styles.boardInfoContainer }>
                <Text style= { styles.boardInfoText }>{ status }</Text>
            </View>

            <View style= {styles.boardPlay}>
                { [0, 1, 2].map(rowIndex => 
                    <View 
                        key={ 'boardRow_' + rowIndex }
                        style= {styles.boardRow} 
                    >
                        { renderRow(rowIndex) }
                    </View>
                )}
            </View>
        </>
    )
}

type Squares = Array< null | "X" | "O" >
type SquareProps = {
    value: "X" | "O" | null,
    onSquareClick: () => void
}
function Square({ value, onSquareClick }: SquareProps) {
    return (
        <Pressable 
            style= {styles.square}
            onPress={ onSquareClick }
        >
            <Text style= {styles.squareText}>{ value }</Text>
        </Pressable>
    )
}

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
            return squares[a];
        }
    }
    return null;
}

const styles = StyleSheet.create({
    boardInfoContainer: {
        height: 45,
        marginTop: 10,
        width: '50%',

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

        backgroundColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    boardInfoText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#333',
        userSelect: 'none',
    },

    boardPlay: {
        flex: 1,
        justifyContent: 'center'
    },
    boardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        height: 57,
        width: 57,

        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    squareText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        userSelect: 'none',
    },

    boardHistoryHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    switchBoardHistoryheader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    boardHistoryHeaderButton: {
        height: 50,
        width: '75%',

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc',

        userSelect: 'none',
    },

    boardHistory: {
        flex: 4,
        
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,

        alignContent: 'stretch',
        alignItems: 'stretch',

        flexWrap: 'wrap',
    },
    boardHistoryButton: {
        height: 50,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc',

        userSelect: 'none',
    }
})