import styles from "./page.module.scss"
const  CreatePoll =()=>{
    return(<>
         <div className={styles.stu} >

         
        <form  className={styles.title}>
       <div>
        Ask your Question here...
       </div>
       <input
     type="text"
     placeholder="Enter your questions here"
     className={styles.item1}
     style={{marginTop :"20px"}}
     />
      
      <div>
        And your options are 
       </div>    
   <input
     type="text"
     placeholder="Choice1"
     className={styles.item}
    />
     <input
     type="text"
     placeholder="Choice2"
     className={styles.item}

    />
    <input
     type="text"
     placeholder="Choice3"
     className={styles.item}

    />
    <button className={styles.btncss}>
      submit

    </button>
   
  </form>
  </div>
    </>)
}

export default CreatePoll;