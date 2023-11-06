import styles from './page.module.css'
import { tiltNeon } from '../utils/fonts'

const GameIcon = ({imageURL, gameTitle}: {
    imageURL: string;
    gameTitle: string
}) => {
    const gameBackground = {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div>
            <div className={styles.gameIcon}>

            </div>
            <h4>{gameTitle}</h4>
        </div>
    )
}

export default function Home() {
  return (
    <div className={styles.home}>
        <h1 className={tiltNeon.className}>Games</h1>
    </div>
  )
}
