'use client';
import styles from './page.module.scss'
import { BiUpvote } from "react-icons/bi"
import { BiDownvote } from "react-icons/bi"
import { FaRegCommentAlt } from "react-icons/fa"
import { IoMdShareAlt } from "react-icons/io"
import { useState } from 'react';
import Poll from 'react-polls';
const Postcard = () => {

    const [flag, setFlag] = useState(false);
    const [commentflag, setcommentflag] = useState(false);
    const [upvote, setupvote] = useState(0);
    const [option1, setoption1] = useState(0);
    const [option2, setoption2] = useState(0);
    const [option3, setoption3] = useState(0);
    var j = option1;
    var k = option2;
    var l = option3;
    var upvoteCounter = upvote;
    const pollQuestion = 'is this really helpfull'
    // const pollAnswers = [
    //   { option: 'Yes', votes: 3},
    //   { option: 'No', votes: 2 },
    //   { option: 'boath', votes: 2 },

    // ]



    const [state, setState] = useState([
        { option: 'Yes', votes: 3 },
        { option: 'No', votes: 2 },
        { option: 'boath', votes: 2 },

    ]);


    const handleVote = (voteAnswer) => {
        console.log("hey")


        const newPollAnswers = state.map((answer) => {
            if (answer.option === voteAnswer) answer.votes++;
            return answer;
        })
        setState(newPollAnswers)
    }






    return (<>


        <div className={styles.card}>
            <div className={styles.aligncomponent}>
                <div className={styles.component}>


                    <div className={styles.upvote}>
                        <BiUpvote size={30} onClick={() => {
                            upvoteCounter += 1;
                            setupvote(upvoteCounter);
                        }} />
                        <div
                        >
                            {upvote}
                        </div>
                        <BiDownvote size={30} onClick={() => {
                            upvoteCounter -= 1;
                            setupvote(upvoteCounter);
                        }} />
                    </div>
                    <div>
                        <div>
                            <div className={styles.components}>

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
                                        () => {
                                            if (flag) {
                                                setFlag(false)
                                            } else {
                                                setFlag(true)
                                            }
                                        }
                                    }>
                                        {flag ? "joined" : "join"}
                                    </button>
                                </div>


                            </div>


                        </div>
                        <div>
                            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg ' style={{
                                height
                                    : "400px", width: "600px", placeItems: "center", marginLeft: "80px", marginTop: "20px"
                            }}>

                            </img>

                        </div>
                        <div className={styles.comment}>


                            <FaRegCommentAlt size={30} onClick={
                                () => {
                                    if (flag) {
                                        setcommentflag(false)
                                    } else {
                                        setcommentflag(true)
                                    }
                                }} />

                            <div className={styles.share}>

                                <IoMdShareAlt size={30} />



                            </div>




                        </div >

                        <Poll question={pollQuestion} answers={state} customStyles={{ theme: 'white', questionColor: "#fff" }} onVote={handleVote} />


                        {(<div>

                            {/* commentflag && */}

                            <div className={styles.inputdiv}>

                                <input className={styles.input} placeholder="Type here..."></input>
                                <div className={styles.shadow__btn}>
                                    make comment

                                </div>

                            </div>
                            <div className={styles.Commentcard}>

                                <div className={styles.comments}>

                                    <img className={styles.img} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'></img>
                                    <div>
                                        this is a comment section ...
                                    </div>

                                </div>

                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>





    </>)
}
export default Postcard;