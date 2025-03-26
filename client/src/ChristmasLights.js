import { useEffect } from "react"
import styles from './christmasLights.module.css'
import image1 from './images/cl_image1.jpeg'
import image2 from './images/cl_image2.jpg'
import image3 from './images/cl_image3.jpeg'
import image4 from './images/cl_image4.jpeg'
import image5 from './images/cl_image5.jpeg'
import image6 from './images/cl_image6.webp'
import image7 from './images/cl_image7.jpeg'
import image8 from './images/cl_image8.jpeg'
import image9 from './images/cl_image9.jpeg'
import image10 from './images/cl_image10.jpeg'
import image11 from './images/cl_image11.webp'
import bag from './images/bag.svg'
import image12 from './images/cl_image12.jpeg'
import { useCart } from './Cartcontext';
import { Link } from 'react-router-dom';
function ChristmasLights(){
    const { addToCart } = useCart();
    useEffect(()=>{
        document.body.style.backgroundColor ='#2bc02b'
   


    return()=>{
        document.body.style.backgroundColor ='' 
    }
},[])

const handleBuy = (name, image, price) => {
    const item = { name, image, price };
    addToCart(item);
  };

return(
    <>
   <div className={styles.frontP}>
    <p>Bring your holiday display to life with our dazzling collection of Christmas lights! Whether you prefer the warm glow of vintage bulbs, twinkling LED string lights, or color-changing designs, we have options to suit every style. Brighten up your home with icicle lights, pathway lights, or even projector lights for a stunning festive ambiance. Indoors or outdoors, our lights will make your Christmas shine.
</p>
    </div>
    <Link to="/checkout" className={styles.buttonBag}>
    <div className={styles.superBag}>
  <img src={bag} className={styles.Bag} alt="Bag"/>
  </div>
</Link>



<div className={styles.div}>
    <div className={styles.wrapper}>
        <div className={styles.box}>
            <p className={styles.boxHeader}>Warm White LED String Lights</p>
        <img src={image1}/>
        <p className={styles.paragraph}>Create a cozy holiday atmosphere with these warm white LED string lights, perfect for wrapping around your tree or decorating your windows.
         These lights are energy-efficient and provide a soft, inviting glow.</p>
            <button onClick ={() => handleBuy('Warm White LED String Lights', image1, 15.99)}>Buy</button>
            <span>$15:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Multicolor Twinkle Lights</p>
        <img src={image2}/>
        <p className={styles.paragraph}>Bring festive cheer with these multicolor twinkle lights, 
        featuring vibrant red, green, blue, and yellow bulbs. Ideal for both indoor and outdoor use, 
        they add a playful touch to any holiday setting.</p>
            <br></br>
            <button  className={styles.buttonTwo} onClick ={() => handleBuy('Multicolor Twingkle Lights', image2, 19.99)}>Buy</button>
            <span className={styles.spanTwo}>$19:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Icicle Drop Lights </p>
        <img src={image3}/>
        <p className={styles.paragraph}>Add a winter wonderland feel to your home with these elegant icicle drop lights, which mimic the look of hanging icicles. 
        Their cool white glow is perfect for outlining roofs, windows, or fences.</p>
            <br></br>
            <button className={styles.buttonThree} onClick ={() => handleBuy('Icicle Drop Lights', image3, 24.99)}>Buy</button>
            <span className={styles.spanThree}>$24:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Battery-Operated Fairy Lights</p>
        <img src={image4}/>
        <p className={styles.paragraph}>Portable and versatile, these battery-operated fairy lights bring magic anywhere you place them, from centerpieces to wreaths. The warm LED bulbs offer a soft sparkle, 
        ideal for holiday decor without needing a nearby outlet.</p>
            <br></br>
            <button className={styles.buttonFour} onClick ={() => handleBuy('Battery-Operated Fairy Lights', image4, 22.49)}>Buy</button>
            <span className={styles.spanFour}>$22:49</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Color-Changing LED String Lights</p>
        <img src={image5}/>
        <p className={styles.paragraph}>Set the mood with these color-changing LED lights that transition smoothly through a rainbow of colors. With various lighting modes, 
        they’re ideal for adding a dynamic display to your holiday decorations.</p>
            <br></br>
            <button className={styles.buttonFive}onClick ={() => handleBuy('Color-Changing LED String Lights', image5, 29.99)}>Buy</button>
            <span className={styles.spanFive}>$29:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Classic C7 Ceramic Christmas Bulbs </p>
        <img src={image6}/>
        <p className={styles.paragraph}>Bring back the nostalgia with these classic C7 ceramic bulbs, reminiscent of traditional holiday lighting. They emit a warm, 
        steady glow that adds a vintage feel to your festive setup.</p>
            <br></br>
            <button onClick ={() => handleBuy('Classic C7 Ceramic Christmas Bubls', image6, 34.99)}>Buy</button>
            <span>$34:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Snowflake Projection Lights</p>
        <img src={image7}/>
        <p className={styles.paragraphSeven}>Transform your home into a winter paradise with these snowflake projection lights, casting animated snowflakes on any surface. Perfect for creating an enchanting, 
        snowy scene without the cold!</p>
            <br></br>
            <button className={styles.buttonSeven} onClick ={() => handleBuy('Snowflake Projection Lights ', image7, 27.99)}>Buy</button>
            <span className={styles.spanSeven}>$27:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>LED Curtain Lights </p>
        <img src={image8}/>
        <p className={styles.paragraph}>Drape these elegant LED curtain lights over a wall or window to create a shimmering backdrop for your holiday gatherings. Their delicate glow adds a touch of elegance to any room or outdoor space.</p>
            <br></br>
            <button  onClick ={() => handleBuy('LED Curtain Lights', image8, 21.99)}>Buy</button>
            <span>$21:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Net Mesh Lights </p>
        <img src={image9}/>
        <p className={styles.paragraph}> Cover bushes, hedges, or walls with ease using these net mesh lights, designed for hassle-free setup. They come in warm white and multicolor options, ideal for creating a uniform,
         radiant display.</p>
            <br></br>
            <button className={styles.buttonNine} onClick ={() => handleBuy('Net Mesh Lights', image9, 18.49)}>Buy</button>
            <span className={styles.spanNine}>$18:49</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Candle-Style Window Lights</p>
        <img src={image10}/>
        <p className={styles.paragraph}>These charming candle-style lights offer a timeless touch to any window or mantel, with a steady LED flame that mimics real candlelight. Battery-operated for convenience,
         they add a classic, welcoming glow.</p>
            <br></br>
            <button className={styles.bottomRow} onClick ={() => handleBuy('Candle-Style Window Lights', image10, 39.99)}>Buy</button>
            <span className={styles.bottomRow}>$39:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Solar-Powered Pathway Lights</p>
        <img src={image11}/>
        <p className={styles.paragraph}>Illuminate your outdoor walkways with these solar-powered pathway lights, ideal for eco-friendly holiday decoration. They charge during the day and emit a gentle light by night,
         guiding guests to your door.</p>
            <br></br>
            <button className={styles.bottomRow} onClick ={() => handleBuy('Solar-Powered Pathway Lights', image11, 16.99)}>Buy</button>
            <span className={styles.bottomRow}>$16:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Mini Globe String Lights</p>
        <img src={image12}/>
        <p className={styles.paragraph}> These mini globe string lights add a unique charm with their round, frosted bulbs that emit a soft, even glow. Perfect for indoor or outdoor decorating, they bring a festive touch to any space. </p>
            <br></br>
            <button className={styles.bottomRow} onClick ={() => handleBuy('Mini Globe String Lights', image12, 14.99)}>Buy</button>
            <span className={styles.bottomRow}>$14:99</span>
        </div>
    </div>
    </div>
    </>
)






}



export default ChristmasLights