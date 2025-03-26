import styles from './dashBoard.module.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



function Dashboard() {

    useEffect(()=>{

        document.body.style.backgroundColor = 'red';



        return(()=>{
            document.body.style.backgroundColor = ''
        })
          
    },[])






    return(
    <>
        <br></br>
        <br></br>
     <div className={styles.santa}><span className={styles.title}>Christmas Store</span><iframe src="https://giphy.com/embed/4Tbi3JylIFpzm1qyRY" width="70px" height="70px" frameBorder="0" className={styles.gif} allowFullScreen></iframe> </div>
        <br></br>
        <br></br>
        <br></br>
        
        


            <div className={styles.boxTag}>
    <Link to="/christmas-trees" className={styles.CT}>Christmas trees</Link>
    <Link to="/christmas-lights" className={styles.CL}>Christmas lights</Link>
    <Link to="/christmas-decorations" className={styles.CD}>Christmas decorations</Link>
            </div>
            <br></br>

<div className={styles.grid}>
   <Link to="/christmas-trees" className={styles.tree}></Link>
    <Link to="/christmas-lights" className={styles.lights}></Link>
    <Link to="/christmas-decorations" className={styles.decorations}></Link>
     </div>
  
     </>
    )
}

export default Dashboard;