import styles from './page.module.css'
import Layout from './layout'
import tictactoeImg from '../public/images/tictactoe-test.jpg'
import kakuroImg from '../public/images/kakuro.png'
import nonogramImg from '../public/images/nonogram.png'
import sudokuImg from '../public/images/sudoku.png'
import minesweeperImg from '../public/images/minesweeper.png'

const GameIcon = ({imageURL, gameTitle, gameURL}: {
    imageURL: string;
    gameTitle: string;
    gameURL: string;
}) => {
    const gameBackground = {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div className={styles.iconDiv}>
            <a href={gameURL}>
                <div className={styles.gameIcon} style={gameBackground}>
                </div>
            </a>
            <h4>{gameTitle}</h4>
        </div>
    )
}

export default function Home() {
  return (
    <Layout>
        <h1>Games</h1>
        <div className={styles.gameGrid}>
            {/* <GameIcon
                imageURL={tictactoeImg.src}
                gameTitle='Tic Tac Toe'
                gameURL='#'
            /> */}
            <GameIcon
                imageURL={kakuroImg.src}
                gameTitle='Kakuro'
                gameURL='./kakuro/'
            />
            <GameIcon
                imageURL={nonogramImg.src}
                gameTitle='Nonogram'
                gameURL='./nonogram'
            />
            <GameIcon
                imageURL={sudokuImg.src}
                gameTitle='Sudoku'
                gameURL='./sudoku'
            />
            <GameIcon
                imageURL={minesweeperImg.src}
                gameTitle='Minesweeper'
                gameURL='./minesweeper'
            />
        </div>
    </Layout>
  )
}
