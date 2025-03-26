import styles from './signUp.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState(''); // New state for response
    const navigate = useNavigate(); // useNavigate hook

    useEffect(() => {
        // Apply body styles on mount
        document.body.style.backgroundColor = "#1abc9c";
        document.body.style.display = "flex";
        document.body.style.alignItems = "center";
        document.body.style.justifyContent = "center";
        document.body.style.height = "100vh";
        document.body.style.padding = "15px";
        document.body.style.overflow = "hidden";
        document.body.style.textAlign ='center'

        // Apply global reset styles
        const globalStyles = document.createElement('style');
        globalStyles.innerHTML = `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
        `;
        document.head.appendChild(globalStyles);
    
        // Cleanup function to remove styles when leaving
        return () => {
          document.body.style = "";
          document.head.removeChild(globalStyles);
        };
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:4988/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();

        console.log('data.success:', data.success);
 
        if (data.success) {
          setResponseMessage('Login passed: ' + data.message);
          
           navigate('/dashboard');
      } else {
          setResponseMessage('Login failed: ' + data.message);
      }
        
        
      };
    
    return(
    
    <div className={styles.wrapper}>
    <div className={styles.title}><span>Login Form</span></div>
    <form onSubmit={handleSubmit}>
      <div className="row">
      <FontAwesomeIcon icon={faUser} className={styles.fas}/>
        <input type="text" placeholder="Email or Phone"  value={email}
                        onChange={(e) => setEmail(e.target.value)}  // Controlled input for email
                     required />
      </div>
      <div className="row">
      <FontAwesomeIcon icon={faLock} className={styles.fas}/>
        <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Controlled input for password
                         required />
      </div>
      <div className="pass"><a href="#">Forgot password?</a></div>
      <div className="row button">
         <input type="submit" value="Login" className={styles.login}/>
      </div>
      <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
    </form>
    {responseMessage && <p>{responseMessage}</p>}
  </div>
    )
}


export default Signup;