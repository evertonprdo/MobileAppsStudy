import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TicTacToe() {
    const [ history, setHistory ] = useState<Array<Squares>>([Array(9).fill(null)]);
    const [ currentMove, setCurrentMove ] = useState(0);
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

    const moves = history.map((s, move) => {
        const description = move > 0  ?
            "Go to move #" + move : "Go to start"
        ;
        return (
            <Pressable 
                key={ "Move_" + move }
                onPress={ () => jumpTo(move) }
                style= { styles.boardHistoryButton }
            >
                <Text>{ description }</Text>
            </Pressable>
        )
    })

    return (
        <View style= {{flex: 1}}>
            <View style= {{flex: 1}}>
                <Board 
                    xIsNext={xIsNext}
                    squares= {currentSquares}
                    onPlay={ handlePlay }
                />
            </View>
            <View style= {styles.boardHistory}>
                { moves }
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

    return (
        <>
            <View style={ styles.boardInfoContainer }>
                <Text style= { styles.boarInfoText }>{ status }</Text>
            </View>

            <View style= {styles.boardPlay}>
                <View style= {styles.boardRow}>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </View>
                <View style= {styles.boardRow}>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </View>
                <View style= {styles.boardRow}>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </View>
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
        height: 75,
        marginVertical: 10,
        width: '75%',

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

        backgroundColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    boarInfoText: {
        fontWeight: 'bold',
        fontSize: 24,
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
        height: 73,
        width: 73,

        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    squareText: {
        fontWeight: 'bold',
        fontSize: 33,
        color: '#333',
        userSelect: 'none',
    },

    boardHistory: {
        flex: 1,
        gap: 10,
        flexWrap: 'wrap',
        padding: 10,
    },

    boardHistoryButton: {
        maxWidth: '50%',
        height: 50,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ccc'
    }
})