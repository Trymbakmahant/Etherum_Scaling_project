'use client';
import styles from './page.module.scss'
import { BiUpvote } from "react-icons/bi"
import { BiDownvote } from "react-icons/bi"
import{FaRegCommentAlt} from "react-icons/fa"
import {IoMdShareAlt} from "react-icons/io"
import { useState } from 'react';
const Postcard = () => {
    
    const [flag,setFlag] = useState(false);
    const [upvote,setupvote] = useState(0);
    var upvoteCounter = upvote;
    return (<>

        <div className={styles.card}>

            <div className={styles.component}>


                <div className={styles.upvote}>
                    <BiUpvote size={30} onClick={()=>{
                        upvoteCounter +=1;
                        setupvote(upvoteCounter);
                    }} />
                    <div 
                    >
                       {upvote}
                    </div>
                    <BiDownvote size={30} onClick={()=>{
                        upvoteCounter -=1;
                        setupvote(upvoteCounter);
                    }} />
                </div>
                <div className={styles.component}>

                    <img className={styles.img} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'></img>
                    <div style={{ marginLeft: "30px" }}>
                        userName
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                        channelName
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                        PostedBy
                    </div>
                    <div>
                        <button className={styles.btn} onClick={
                        ()=>{
                            if(flag){
                                setFlag(false)
                            }else{
                                setFlag(true)
                            }
                        }
                        }>
                            {flag?"joined":"join"}
                        </button>
                    </div>


                </div>
             

            </div>
            <div>
                    <img src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg ' style={{height
                :"400px",width:"600px",placeItems:"center" ,marginLeft:"80px", marginTop:"20px" }}>

                    </img>
                   
                </div>
                <div className={styles.comment}>
                    
                    
                <FaRegCommentAlt  size={30} />
                 
                <div className={styles.share}>
                    
                    <IoMdShareAlt  size={30}/>
                 
                    
                    
                    </div>
    
                
                
                </div >
                <div     className={styles.comments
                }
>

                <img className={styles.img} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'></img>
                <div>
                    thsi is a comment section ...
                </div>
                    
                </div>
               
                
        </div>




    </>)
}
export default Postcard;