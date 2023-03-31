import React,{useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import "./RightSide.css";

const skillOptions = [{skill:"HTML" , id:1},{skill:"CSS" , id:2},{skill:"JS",id:3},{skill:"JAVA",id:4},{skill:"PYTHON",id:5}]

const RightSide = ()=>{
    const [subscriptionMessage,setSubscriptionMessage]=useState("Try it free 7 days then ₹180/mo. thereafter");
    const [formValues,setFormValues]=useState({"name":'',"email":'',"password":''});
    const [allSkills,setAllSkills] = useState(skillOptions);

    const validationTask = (formValues.name!=="") && (formValues.email!=="") && (formValues.password!=="");

    function handleFormInput(e){
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    function handleSkills(e){
       setAllSkills([...e]);
    }

    function subscriptionConfirm(e){
        setSubscriptionMessage("You have successfully subscribed to our plan ✓");
        setFormValues({"name":'',"email":'',"password":''});
        setAllSkills([]);
        setTimeout(()=>{setSubscriptionMessage("Try it free 7 days then ₹180/mo. thereafter")},3000);
    }
    return (
        <div className="right-side">
            <button className="top-button">{subscriptionMessage}</button>
            <div className="form-description">
                <input type="text" className="nameBox" name="name" onChange={handleFormInput} value={formValues.name} placeholder="Name"/>
                <input type="email" className="emailBox" name ="email" onChange = {handleFormInput} value={formValues.email} placeholder="Email Address"/>
                <input type="password" className="passwordBox" name ="password" onChange = {handleFormInput} value={formValues.password} placeholder="Password"/>
                <Multiselect options={allSkills} className="skillsBox" name="skill" onChange={handleSkills} displayValue="skill" placeholder="Choose your skills"/>
                <button className="submitForm" onClick={subscriptionConfirm} disabled={!validationTask} name="buttonActive" >CLAIM YOUR FREE TRIAL</button>
                <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
            </div>

        </div>


    )

}






export default RightSide;