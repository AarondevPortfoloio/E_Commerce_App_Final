import { useEffect } from "react"
import styles from './christmasDecorations.module.css'
import image1 from './images/cd_image1.jpeg'
import image2 from './images/cd_image2.jpeg'
import image3 from './images/cd_image3.jpeg'
import image4 from './images/cd_image4.jpeg'
import image5 from './images/cd_image5.jpeg'
import image6 from './images/cd_image6.jpeg'
import image7 from './images/cd_image7.jpeg'
import image8 from './images/cd_image8.jpeg'
import image9 from './images/cd_image9.jpeg'
import image10 from './images/cd_image10.jpeg'
import image11 from './images/cd_image11.jpeg'
import image12 from './images/cl_image12.jpeg'
import bag from './images/bag.svg'
import { Link } from "react-router-dom"
import { useCart } from './Cartcontext';
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
    <p>Transform your home into a winter wonderland with our stunning Christmas decorations! From classic wreaths and elegant table centerpieces to festive nutcrackers and sparkling snow globes, we have everything you need to make your holiday season magical. Deck the halls with garlands, hang personalized stockings, and add a festive touch with beautifully crafted ornaments. Whether you’re looking for traditional décor or modern holiday accents, find everything to make your Christmas merry and bright!</p>
    </div>
    <Link to="/checkout" className={styles.buttonBag}>
    <div className={styles.superBag}>
  <img src={bag} className={styles.Bag} alt="Bag"/>
  </div>
</Link>
<div className={styles.div}>
    <div className={styles.wrapper}>
        <div className={styles.box}>
            <p className={styles.boxHeader}>Snowy Pinecone Wreath </p>
        <img src={image1}/>
        <p className={styles.paragraph}>Welcome guests with this festive snowy pinecone wreath, featuring frosted pinecones, red berries, and faux greenery.
         It’s the perfect way to add a rustic charm to your front door or mantel.</p>
            <button className={styles.buttonOne} onClick ={() => handleBuy('Snowy Pinecone Wreath', image1, 29.99)}>Buy</button>
            <span className={styles.buttonOne}>$29:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Vintage Glass Ornaments </p>
        <img src={image2}/>
        <p className={styles.paragraph}>Add a touch of nostalgia to your tree with these vintage glass ornaments, featuring delicate patterns and vibrant colors. 
        Each ornament sparkles under the holiday lights, bringing a classic feel to your decor.</p>
            <br></br>
            <button className={styles.buttonTwo} onClick ={() => handleBuy('Vintage Glass Ornaments', image2, 19.99)}>Buy</button>
            <span className={styles.buttonTwo}>$19:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Nutcracker Soldier Figurine </p>
        <img src={image3}/>
        <p className={styles.paragraph}>This timeless nutcracker soldier stands guard with its traditional red and gold uniform, bringing a festive touch to your mantel or tabletop. 
        A beloved symbol of the holiday season, perfect for collectors.</p>
            <br></br>
            <button className={styles.buttonThree} onClick ={() => handleBuy('Nutcracker Soldier Figurine', image3, 24.99)}>Buy</button>
            <span className={styles.buttonThree}>$24:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>LED Window Silhouette Lights</p>
        <img src={image4}/>
        <p className={styles.paragraph}>Brighten your windows with these LED silhouette lights, showcasing festive shapes like stars, snowflakes, and bells. They provide a cheerful glow that’s sure to catch the eyes of passersby.</p>
            <br></br>
            <button className={styles.buttonFour} onClick ={() => handleBuy('LED Window Silhouette Lights', image4, 15.99)}>Buy</button>
            <span className={styles.buttonFour}>$15:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Christmas Tree Skirt </p>
        <img src={image5}/>
        <p className={styles.paragraph}>Set the mood with these color-changing LED lights that transition smoothly through a rainbow of colors. With various lighting modes, 
        they’re ideal for adding a dynamic display to your holiday decorations.</p>
            <br></br>
            <button className={styles.buttonFive} onClick ={() => handleBuy('Christmas Tree Skirt', image5, 22.99)}>Buy</button>
            <span className={styles.buttonFive}>$22:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Wooden Advent Calendar</p>
        <img src={image6}/>
        <p className={styles.paragraph}> Count down to Christmas with this beautifully crafted wooden advent calendar, featuring 24 drawers for treats or small gifts. The charming design adds a whimsical touch to your holiday decor.</p>
            <br></br>
            <button className={styles.buttonSix} onClick ={() => handleBuy('Wooden Advent Calendar', image6, 34.99)}>Buy</button>
            <span className={styles.buttonSix}>$34:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Hanging Snowflake Garland</p>
        <img src={image7}/>
        <p className={styles.paragraphSeven}>Elevate your holiday decor with this delicate snowflake garland, perfect for draping across windows, walls, or staircases. The glittering snowflakes catch the light and bring a wintry sparkle indoors.</p>
            <br></br>
            <button className={styles.buttonSeven}onClick ={() => handleBuy('Hanging Snowflake Garland', image7, 14.99)}>Buy</button>
            <span className={styles.buttonSeven}>$14:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Ceramic Christmas Village </p>
        <img src={image8}/>
        <p className={styles.paragraph}> Build your own winter wonderland with this ceramic Christmas village set, complete with cozy cottages, snow-covered trees, and miniature streetlights. A timeless addition to any holiday display.</p>
            <br></br>
            <button className={styles.buttonEight} onClick ={() => handleBuy('Ceramic Christmas Village', image8, 49.99)}>Buy</button>
            <span className={styles.buttonEight}>$49:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Plush Santa Claus Figure </p>
        <img src={image9}/>
        <p className={styles.paragraph}> Bring a jolly spirit to your home with this plush Santa Claus figure, dressed in his iconic red suit and carrying a sack of presents. Perfect for adding a cheerful touch to your mantel or entryway.</p>
            <br></br>
            <button  className={styles.buttonNine} onClick ={() => handleBuy('Plush Santa Claus Firgure', image9, 18.99)}>Buy</button>
            <span className={styles.buttonNine}>$18:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>LED Christmas Tree Topper Star </p>
        <img src={image10}/>
        <p className={styles.paragraph}>Crown your Christmas tree with this dazzling LED star topper, featuring a warm glow that lights up your entire room. Its classic design complements any holiday theme.</p>
            <br></br>
            <button className={styles.buttonLf} onClick ={() => handleBuy('LED Christmas Tree Topper Star', image10, 12.99)}>Buy</button>
            <span className={styles.buttonLf}>$12:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Festive Table Runner</p>
        <img src={image11}/>
        <p className={styles.paragraph}>Set the scene for your holiday feasts with this festive table runner, adorned with embroidered poinsettias and holly. It’s an elegant addition that brings seasonal cheer to your dining table.</p>
            <br></br>
            <button className={styles.buttonLf}onClick ={() => handleBuy('Festive Table Runner', image11, 16.99)}>Buy</button>
            <span className={styles.buttonLf}>$16:99</span>
        </div>
        <div className={styles.box}>
        <p className={styles.boxHeader}>Pre-Lit Garland </p>
        <img src={image12}/>
        <p className={styles.paragraph}> Decorate your staircase, fireplace, or doorway with this lush pre-lit garland, featuring pine branches, red berries, and warm white lights. It’s a versatile piece that adds a cozy, festive touch to any space. </p>
            <br></br>
            <button className={styles.buttonLftwo}onClick ={() => handleBuy('Pre-Lit Garland', image12, 24.99)}>Buy</button>
            <span className={styles.buttonLftwo}>$24:99</span>
        </div>
    </div>
    </div>
    </>
)






}



export default ChristmasLights