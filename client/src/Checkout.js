import React, { useState } from 'react';
import styles from './checkout.module.css'
import truck from './images/truck.svg'
import lock from './images/lockIcon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './Cartcontext';




  




function Checkout(){

    const [showPayment, setShowPayment] = useState(false);
    const [showCreditCard, setCreditCard] = useState(false);
    const [showOrderReview, setOrderReview] = useState(false);
    const [showOrderReviewNo, setOrderReviewNo] = useState(false);
    const [showHandleReviewFinal, setHandleReviewFinal] = useState(false);
    const [showDelivery, setDelivery] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
     const [streetAddress,setStreetAddress] = useState('');
     const [email,setEmail] = useState('');
     const [phoneNumber,setPhoneNumber] = useState('');
     const [cardNumber, setCardNumber] = useState("");
     const [expiry, setExpiry] = useState("");
    const [zipCode, setZipCode] = useState('')
    

     const { cart,deleteToCart,addToCart} = useCart();
     console.log('Cart in Checkout:', cart);

     const handlePayPal = () =>{
        alert('PayPal is not available at this moment')
     }

     const handleCashDelivery = () =>{
        alert('Cash Delivery not available at this moment')
     }
  
     const [errors, setErrors] = useState({});

    const handleSaveAndContinue = () => {
      //setShowPayment(true);
      let newErrors = {};

      if (!firstName) newErrors.firstName = "Please enter first name.";
      if (!lastName) newErrors.lastName = "Please enter last name.";
      if (!state) newErrors.state = "Please select a state.";
      if (!zipCode) newErrors.zipCode = "Please enter postal code.";
      if (!streetAddress) newErrors.streetAddress = "Please enter street address.";
      if (!email) newErrors.email = "Please enter email.";
      if (!phoneNumber) newErrors.phoneNumber = "Please enter phone number.";
    
      setErrors(newErrors);
    
      // If no errors, proceed
      if (Object.keys(newErrors).length === 0) {
        console.log("Form submitted!"); 
        setShowPayment(true);
      }
    }
    const handleCreditCard = () => {
        setCreditCard(true);
      }
      const handleOrderReview =() =>{
        setOrderReview(true);
        setOrderReviewNo(false);
      }

      const handleOrderReviewNo =() =>{
        setOrderReviewNo(true);
        setOrderReview(false);
      }

    const HandleReviewFinal =() =>{
        setHandleReviewFinal(true);
        setOrderReviewNo(false);
        setCreditCard(false);
        setShowPayment(false);
        setDelivery(false);
        setOrderReview(false);
    }
    const groupedCart = cart;
    const totalPrice = groupedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleZipCode = (e) => {
        setZipCode(e.target.value);
    };
    const [confirmationMessage, setConfirmationMessage] = useState("");
   const  handleConfirmation = ()=>{
        setOrderReviewNo(false);
        setCreditCard(false);
        setShowPayment(false);
        setDelivery(false);
        setOrderReview(false);
        setHandleReviewFinal(false);
        setConfirmationMessage("Your order is on its way!");

    }
const salesTax ={
    AL: 4.00,
    AK: 0.00,
    AZ: 5.60,
    AR: 6.50,
    CA: 7.25,
    CO: 2.90,
    CT: 6.35,
    DE: 0.00,
    DC: 6.00,
    FL: 6.00,
    GA: 4.00,
    HI: 4.00,
    ID: 6.00,
    IL: 6.25,
    IN: 7.00,
    IA: 6.00,
    KS: 6.50,
    KY: 6.00,
    LA: 4.45,
    ME: 5.50,
    MD: 6.00,
    MA: 6.25,
    MI: 6.00,
    MN: 6.88,
    MS: 7.00,
    MO: 4.23,
    MT: 0.00,
    NE: 5.50,
    NV: 6.85,
    NH: 0.00,
    NJ: 6.62,
    NM: 5.12,
    NY: 4.00,
    NC: 4.75,
    ND: 5.00,
    OH: 5.75,
    OK: 4.50,
    OR: 0.00,
    PA: 6.00,
    RI: 7.00,
    SC: 6.00,
    SD: 4.50,
    TN: 7.00,
    TX: 6.25,
    UT: 4.85,
    VT: 6.00,
    VA: 5.30,
    WA: 6.50,
    WV: 6.00,
    WI: 5.00,
    WY: 4.00,
}

{/*const [state, setState] = useState("");

const [tax, setTax] = useState(0);

const finalPrice = (tax + totalPrice).toFixed(2);

const handleStateChange = (e) => {
  const selectedState = e.target.value;
  setState(selectedState);
  setTax(totalPrice * (salesTax[selectedState]/100 || 0)); // Calculate tax
};
*/}



const [state, setState] = useState("");
const [tax, setTax] = useState(0);

const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    
    // Calculate tax only if selectedState has a valid value
    const taxAmount = selectedState ? (totalPrice * (salesTax[selectedState] / 100)) : 0;
    setTax(taxAmount);
  };
  
  // Recalculate the finalPrice every time the tax or totalPrice changes
  const finalPrice = (tax + totalPrice).toFixed(2);

  const currentDate = new Date();
console.log('Current Date:',currentDate); // Output: Current date and time

// Add one week (7 days) to the current date
const oneWeekLater = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
console.log("Date One Week Later:", oneWeekLater);

const formatCardNumber = (value) => {
    // Remove any non-digit characters
    const onlyNumbers = value.replace(/\D/g, "");

    // Add space after every 4 digits
    const formatted = onlyNumbers.replace(/(\d{4})/g, "$1 ").trim();

    return formatted;
  };

  const handleInputChange = (e) => {
    let formattedValue = formatCardNumber(e.target.value);
    console.log('value is changing')
    // Limit to 19 characters (16 digits + 3 spaces)
    if (formattedValue.length > 19) {
      formattedValue = formattedValue.slice(0, 19);
    }

    setCardNumber(formattedValue);
  };


  const formatExpiry = (value) => {
    // Remove non-numeric characters
    const onlyNumbers = value.replace(/\D/g, "");

    // Format: MM/YY (only allow 4 digits total)
    if (onlyNumbers.length <= 2) {
      return onlyNumbers; // If only month is entered
    }
    return onlyNumbers.slice(0, 2) + "/" + onlyNumbers.slice(2, 4);
  };

  const handleChange = (e) => {
    let formattedValue = formatExpiry(e.target.value);

    // Limit to 5 characters (MM/YY)
    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5);
    }

    setExpiry(formattedValue);
  };















return (
    
    <>
   
    <div className={styles.cartContainer}>
{groupedCart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        groupedCart.map((item, index) => (
          <div key={index} >
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p> {/*edit here*/}
              <button onClick={() => addToCart(item)} className={styles.updateButton}>Add</button>
              <button onClick={() => deleteToCart(item)} >Delete</button>
            </div>
          </div>
        ))
      ) }
    </div>





    <div className={styles.Philo}><p><strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
    <p><strong>EstimatedTax:</strong></p>
    <p>Sales Tax: ${tax.toFixed(2)}</p>
    <p>The final price is ${finalPrice}</p>
    </div>



{/*<select name="state" id="state" autocomplete="on"  aria-required="true" aria-invalid="false" aria-describedby="state-select-aria-description" onChange={handleStateChange}
required><option hidden="" data-testid="hidden-option" disabled="" value="" aria-hidden="true">State</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>


first line
 <input type='text' placeholder='First name**'className={styles.firstNameContainer}onChange={(e) => setFirstName(e.target.value)}></input>
    {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
</select>*/}
    {showDelivery &&(
        <>
    <h1 className={styles.Header}>Checkout</h1>
    <h3>Delivery Options</h3>
    <div className={styles.shipContainer}>Ship</div>
    <br></br>
    <input type='text' placeholder='First name**'className={styles.firstNameContainer}onChange={(e) => setFirstName(e.target.value)}></input>
    <span>
    <input type='text' placeholder='Last name**'onChange={(e) => setLastName(e.target.value)}>
    </input>
    </span>
 <select name="state" id="state" autocomplete="on"  aria-required="true" aria-invalid="false" aria-describedby="state-select-aria-description" onChange={handleStateChange}
required><option hidden="" data-testid="hidden-option" disabled="" value="" aria-hidden="true">State</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
<input type='text' placeholder='Postal Code' onChange={handleZipCode}></input>
<div style={{ display: "flex", gap: "10px" }}>
  {errors.firstName && (
    <p className="errorMessage" style={{ border: "3px solid green", fontSize:'small', color:'red' }}>
      {errors.firstName}
    </p>
  )}
  {errors.lastName && (
    <p className="errorMessage" style={{ border: "3px solid green",fontSize:'small', color:'red' }}>
      {errors.lastName}
    </p>
  )}
   {errors.zipCode && (
    <p className="errorMessage" style={{ border: "3px solid green",fontSize:'small', color:'red' , marginLeft:"9.375rem"}}>
      {errors.zipCode}
    </p>
  )}
</div>
    <br/>
    <br/>
    <input type='text' placeholder='Street address**'className={styles.streetAddressContainer}onChange={(e) => setStreetAddress(e.target.value)} ></input>
    {errors.streetAddress?.trim() && (
  <p className="errorMessage" style={{ border: "3px solid green", fontSize: 'small', color: 'red', width: '170px' }}>
    {errors.streetAddress}
  </p>
)}
    <br/>
    <br/>  <br/>
    <input type='text' placeholder='Email**'className={styles.emailContainer}onChange={(e) => setEmail(e.target.value)}></input>
    {errors.email?.trim() && (
  <p className="errorMessage" style={{ border: "3px solid green", fontSize: 'small', color: 'red', width: '170px' }}>
    {errors.email}
  </p>
)}
    <span><input type='text' placeholder='Phone Number**'className={styles.phoneNumberContainer}onChange={(e) => setPhoneNumber(e.target.value)}></input></span>
   
{errors.phoneNumber?.trim() && (
  <p className="errorMessage" style={{ border: "3px solid green", fontSize: 'small', color: 'red', width: '170px' }}>
    {errors.phoneNumber}
  </p>
)}
    <br />
    <br />
      <button className={styles.saveButton} onClick={handleSaveAndContinue}
       disabled={
       !state
      }>
        Save and Continue
      </button>
      </>
    )}

      {/* Payment Section */}
      {showPayment && (
        <div className={styles.paymentSection}>
          <h3>Payment Options</h3>
          <p>Select a payment method:</p>
          <label>
            <input type="radio" name="payment" value="creditCard" onClick={handleCreditCard}/> Credit Card
          </label>
          <br />
          <label>
            <input type="radio" name="payment" value="paypal" onClick={handlePayPal}/> PayPal
          </label>
          <br />
          <label>
            <input type="radio" name="payment" value="cash" onClick={handleCashDelivery} /> Cash on Delivery
          </label>
        </div>
      )}
      {showCreditCard && (
        <div className={styles.paymentSection}>
          <h3>You figured it out you bloody genius</h3>
          <div className={styles.creditCardContainer}>
            <p>Add a Card</p>
            <input type='text' value={cardNumber} onChange={handleInputChange} placeholder='Card Number' className={styles.ccBox} minlength="14" maxlength="19"required ></input>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input type='text' placeholder='MM/YY'  onChange={handleChange} value={expiry}></input>
            <input type='text' placeholder='CVV' maxlength='3'></input>
          </div>
          <p>Is the billing addresss the same as the shipping?</p>
          <label htmlFor="yes-no-radio">
         <input type="radio" id="yes-radio" name="billing-address" value="yes" onClick={handleOrderReview} />
            Yes
            </label>
            <label htmlFor="yes-no-radio">
         <input type="radio" id="no-radio" name="billing-address" value="no"  onClick={handleOrderReviewNo} />
            No
            </label>
            <br/>
         <br/>
        </div>
      )}

     {showOrderReview&&(
        <>
        <button className={styles.saveButton} onClick={HandleReviewFinal}>Continue to order review</button>
        <br></br>
        <br></br>
        </>
      )}

      {showOrderReviewNo&&(
        <>
     <div className={styles.billContainer}>Billing Address</div>
    <br></br>
    <br/>
    <br/>
    <input type='text' placeholder='Street address**'className={styles.streetAddressContainer}></input>
    <select name="state" id="state" autocomplete="on" className='billState' aria-required="true" aria-invalid="false" aria-describedby="state-select-aria-description" onChange={handleStateChange}
required><option hidden="" data-testid="hidden-option" disabled="" value="" aria-hidden="true">State</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
<br/>
<br/>
      <button className={styles.saveButton} onClick={HandleReviewFinal}>
        Save and Continue
      </button>
      <br></br>
    <br></br>
        </>
      )}

{showHandleReviewFinal&&(
            <>
            <h3>Delivery Options</h3>
            <p>First Name:{firstName}</p>
            <p>Last Name:  {lastName}</p>
            <p>Street Address:{streetAddress}</p>
            <p>Email:{email}</p>
            <p>Phone Number:{phoneNumber}</p>
            <p>Zip Code: {zipCode}</p>
            <br/>
            <br/>
            <p>Shipping Address:</p>
            <br/>
            <br/>
            <p>Shipping Speed: Your delivery will be shipped out later and arrive {oneWeekLater.toDateString()}. </p>
            <div className={styles.border}></div>
            <h3>Payment</h3>
            <p>Credit Card 
            <p>Number:{cardNumber}, <br></br> Expiration date:{expiry}</p>
            </p>

            <h1>Checkout</h1>
              <span>Are you sure you want to check out? </span><button className={styles.saveButtonFinal} onClick={handleConfirmation}>Yes</button>
            </>
        )
      }
        {confirmationMessage && <p>{confirmationMessage}</p>}
    </>
)
}


export default Checkout



