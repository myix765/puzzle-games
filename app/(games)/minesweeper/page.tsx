import Layout from '../../layout'
import mineStyles from './mine.module.css'

const Tile = () => {
    return (
        <div className={mineStyles.square}>

        </div>
    )
}

export default function MineSweeperGame() {
    let rows = 9;
    let columns = 9;
    
    const renderBoard = () => {
        const board = [];
      
        for (let i = 0; i < rows; i++) {
            const row = []
            for (let j = 0; j < columns; j++) {
                row.push(<Tile key={i+j} />);
            }
            board.push(row);
        }
      
        return board;
    };

    return (
        <Layout>
            <h1>Minesweeper</h1>
            <div className={mineStyles.game}>
                <div className={mineStyles.board}>
                    {renderBoard()}
                </div>
            </div>
        </Layout>
    )
}