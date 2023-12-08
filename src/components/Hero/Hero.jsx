
import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";
import { useEffect, useState } from "react";

 const Hero = () => {
  
  const[num, setNum] = useState(0);
  const[isdeleting, setIsdeleting] = useState(false)
  const toRotate = ['Web Developer','Programmer','ML Enthusiasts']
  const[text, setText] = useState('')
  const[delta, setDelta] = useState(200 - Math.random()*100)
  const period = 800;

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    },delta)

    return()=>{clearInterval(ticker)}
  },[text])

  const tick=()=>{
    let i = num % toRotate.length;
    let fulltext = toRotate[i];
    let updtatedText = isdeleting? fulltext.substring(0, text.length-1): fulltext.substring(0, text.length+1);

    setText(updtatedText);

    if(isdeleting){
      setDelta(prev=>prev/2);

    }

    if(!isdeleting && updtatedText===fulltext){
      setIsdeleting(true);
      setDelta(period)
    }
    else if(isdeleting && updtatedText ===''){
      setIsdeleting(false);
      setNum(num+1);
      setDelta(300);

    }
  }


  
  return (
    <section className={styles.container}>

      <div className={styles.content} >
        
      

        <h1 className={styles.title1}>Hey, it's me </h1>
        <h1 className={styles.title2}>Soumya Upadhyay</h1>
        <h1 className={styles.title3}>{`I'm a `}{text}</h1>
        <p className={styles.description}>
           Reach out if you would like to learn more!
        </p>
        <a href="mailto:soumyau2507@gmail.com" className={styles.contactBtn}>
          Hire Me
        </a>
      </div>
      {/* <img 
        src={getImageUrl("hero/SU.PNG")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} /> 
      <div className={styles.bottomBlur} />
     
    </section>
  );
};

 export default Hero;
