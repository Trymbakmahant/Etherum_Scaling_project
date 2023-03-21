'use client';
import styles from './page.module.scss'
import {BiUpvote} from "react-icons/bi"
import {BiDownvote} from "react-icons/bi"
const Postcard = () => {
    return (<>
   
        <div className={styles.card}>
        <div>
    <BiUpvote/>
            <BiDownvote/>
    </div>
            <div className={styles.carddetails}>
           
                <img className={styles.img} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'>
             </img>
                <p className={styles.texttitle}>address</p>
                <p className={styles.textbody}>Here are the details of the card</p>
            </div>
            <button className={styles.cardbutton}>More info</button>
        </div>


    </>)
}
export default Postcard;