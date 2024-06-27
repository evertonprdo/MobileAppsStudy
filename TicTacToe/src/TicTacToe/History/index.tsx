import styles  from "../styles"
import MoveButton from "./MoveButton"
import type { History} from "../types"

type MovesBoardProps = {
    history: History,
    currentMove: number,
    inverted: boolean
    jumpTo: (i: number) => void
}
export default function History({ history, currentMove, inverted, jumpTo } : MovesBoardProps) {
    const Moves: React.JSX.Element[]  = []
    history.map((_, i) => {
        const isCurrentMove = currentMove === i
        const description = isCurrentMove ?  "You are at move #" + i : "Go to move #" + i
        if (i !== 0) {
            Moves.push(<MoveButton 
                key={ "Move_" + i }
                isCurrentMove= { isCurrentMove }
                onPress={ () => jumpTo(i) }
                description= { description }
                style= { styles.gameButton }
            />);
        }
    })
    return inverted ? Moves.slice().reverse() : Moves
}