import styles from './style/Button.module.css';
import './Header.scss'

export default function header () {
    return (
        <div className='container-header'>
            <span className='img-logo'>
               <img  src='../public/Logo.png'/>
            </span>
    
            <div className='container-info'>
                <span>
                    <img src='../public/Icon.svg'/>
                    <p>Porto Alegre, RS</p>
                </span>
                <button className={styles.button}>
                    <img src='../public/Icon (6).svg' className={styles.img}/>
                </button>
            </div>
        </div>
    )
}