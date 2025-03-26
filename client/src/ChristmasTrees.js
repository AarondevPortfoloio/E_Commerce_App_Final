import { useEffect } from "react";
import styles from './christmasTrees.module.css'
import image1 from './images/ct_image1.jpeg'
import image2 from './images/ct_image2.jpeg'
import image3 from './images/ct_image3.jpeg'
import image4 from './images/ct_image4.jpeg'
import image5 from './images/ct_image5.webp'
import image6 from './images/ct_image6.jpeg'
import image7 from './images/ct_image7.jpeg'
import image8 from './images/ct_image8.jpeg'
import image9 from './images/ct_image9.jpeg'
import image10 from './images/ct_image10.jpeg'
import image11 from './images/ct_image11.jpeg'
import image12 from './images/ct_image12.jpeg'
import bag from './images/bag.svg'
import { useCart } from './Cartcontext';
import { Link } from 'react-router-dom';

function ChristmasTree(){
const { addToCart } = useCart();
useEffect(()=>{

document.body.style.backgroundColor ='#2bc02b'


return() =>{
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
    <p>Find the perfect Christmas tree to be the heart of your holiday celebrations! From classic green and pre-lit trees to flocked, slim, and even upside-down designs, there’s something for every space and style. Choose from elegant white trees, fiber optic options, and charming tabletop trees for smaller spaces. Whether you go traditional or unique, our selection will help you create a breathtaking holiday centerpiece.
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
                <p className={styles.boxHeader}>Classic Evergreen Fur</p>
            <img src={image1}/>
            <p className={styles.paragraph}>This lush, full-bodied fir tree brings a timeless holiday charm with its dense green needles, perfect for showcasing your favorite ornaments. Crafted for durability, it offers years of cozy holiday moments.</p>
                <button onClick ={() => handleBuy('Classic Evergreen Fur', image1, 79.99)}>Buy</button>
                <span>$79:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Snow-Kissed Pine</p>
            <img src={image2}/>
            <p className={styles.paragraph}>A beautiful pine tree lightly dusted with faux snow for a touch of winter magic. Its frosty look creates a cozy, 
                wintry ambiance perfect for any home.</p>
                <br></br>
                <button className={styles.buttonTwo} onClick ={() => handleBuy('Snow Kissed Pine', image2, 89.99)}>Buy</button>
                <span className={styles.spanTwo}>$89:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Pre-Lit Spruce Delight</p>
            <img src={image3}/>
            <p className={styles.paragraph}>\No hassle with lights, this spruce comes pre-lit with warm white LED lights to set the perfect holiday glow. 
            Its realistic branches make it an easy centerpiece for any room.</p>
                <br></br>
                <button className={styles.buttonThree}onClick ={() => handleBuy('Pre-Lit Spruce Delight', image3, 129.99)}>Buy</button>
                <span className={styles.spanThree}>$129:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Compact Tabletop Tree:</p>
            <img src={image4}/>
            <p className={styles.paragraph}> Ideal for small spaces, this tabletop tree fits perfectly on mantels, countertops, or desks. With a charming, natural look, 
            it’s a mini way to bring big cheer.</p>
                <br></br>
                <button onClick ={() => handleBuy('Compact Tabletop Tree', image3, 39.99)}>Buy</button>
                <span>$39:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Tall & Slim Scandinavian Pine</p>
            <img src={image5}/>
            <p className={styles.paragraph}> This elegant, slim pine is perfect 
            for narrow spaces, adding height and sophistication.
             Its minimalist shape is ideal for modern and cozy spaces alike.</p>
                <br></br>
                <button  onClick ={() => handleBuy('Tall & Slim Scandinavian Pine', image4, 119.99)}>Buy</button>
                <span>$119:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Flocked Alpine Beauty</p>
            <img src={image6}/>
            <p className={styles.paragraph}> Heavily flocked branches make this alpine tree look like it’s straight out of a winter wonderland.
             Its snowy finish creates a serene and magical holiday setting.</p>
                <br></br>
                <button  onClick ={() => handleBuy('Flocked Alpine Beauty', image5, 99.99)}>Buy</button>
                <span>$99:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Berry and Pinecone Pine</p>
            <img src={image7}/>
            <p className={styles.paragraphSeven}>Adorned with red berries and pinecones, this tree brings rustic charm and festive flair. Its natural decorations mean less
             hassle and more holiday cheer.</p>
                <br></br>
                <button onClick ={() => handleBuy('Berry and Pinecone Pine', image6, 49.99)}>Buy</button>
                <span className={styles.spanOne}>$49:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Fiber Optic Color Burst</p>
            <img src={image8}/>
            <p className={styles.paragraph}>A lively fiber optic tree that changes colors for a dazzling light display. 
            It’s the perfect tree for adding a fun, modern twist to your holiday décor..</p>
                <br></br>
                <button className={styles.buttonEight}  onClick ={() => handleBuy('Fiber Optic Color Burst', image7, 59.99)}>Buy</button>
                <span className={styles.spanEight}>$59:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Miniature Potted Spruce</p>
            <img src={image9}/>
            <p className={styles.paragraph}>A small, potted spruce that’s perfect for entryways or balconies.
             Its compact size makes it a great choice for those who want a hint of holiday cheer without a full-size tree.</p>
                <br></br>
                <button className={styles.buttonNine}onClick ={() => handleBuy('Miniature Potted Spruce', image8, 29.99)}>Buy</button>
                <span className={styles.spanNine}>$29:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Twinkling White Birch Tree</p>
            <img src={image10}/>
            <p className={styles.paragraph}>This unique, white birch tree brings a soft, glowing ambiance with twinkling lights along its branches.
             It’s an elegant, unconventional take on holiday decor.</p>
                <br></br>
                <button onClick ={() => handleBuy('Twinkling White Birch Tree', image9, 79.99)}>Buy</button>
                <span>$79:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>LED Lit Frosted Fir</p>
            <img src={image11}/>
            <p className={styles.paragraph}> Covered with a delicate frosted finish, this fir tree brings a hint of snow indoors. 
            Its built-in LED lights create a cozy winter atmosphere at the flip of a switch.</p>
                <br></br>
                <button onClick ={() => handleBuy('Led lit Frosted Fir', image10, 139.99)}>Buy</button>
                <span>$139:99</span>
            </div>
            <div className={styles.box}>
            <p className={styles.boxHeader}>Natural Burlap Tree</p>
            <img src={image12}/>
            <p className={styles.paragraph}> A rustic, natural look with a burlap-wrapped base, this tree is perfect for country and farmhouse style homes. Its simple, organic charm makes 
            it an inviting seasonal accent. </p>
                <br></br>
                <button onClick ={() => handleBuy('Natural Burlap Tree', image9, 49.99)}>Buy</button>
                <span>$49:99</span>
            </div>
        </div>
        </div>




</>

)


}



export default ChristmasTree;