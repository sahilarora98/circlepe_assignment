import Image from "next/image";
import Head from "next/head";
import { useState, useEffect,useRef} from 'react';
export default function Home() {
  const [currentDiv, setCurrentDiv] = useState(0);
  const intervalRef = useRef(null); // Ref to store the interval ID

  // Function to reset the interval
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  // Function to handle clicks and reset the interval
  const handleDocumentClick = () => {
    resetInterval();
    setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
  };

  // Function to handle keydown events and reset the interval
  const handleKeyDown = (event) => {
    resetInterval();
    if (event.key === 'ArrowRight') {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    } else if (event.key === 'ArrowLeft') {
      setCurrentDiv((prevDiv) => (prevDiv - 1 + 6) % 6);
    }
  };

  // Set up the automatic slide change every 2 seconds and add event listeners
  useEffect(() => {
    resetInterval();

    // Add event listeners
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listeners and interval on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
  <>
    <div id="slide0" style={{visibility: currentDiv === 0 ? 'visible' : 'hidden',opacity: currentDiv === 0 ? 1 : 0 }}>
      <Head>
        <title>Circlepe Assignmaent</title>
      </Head>

      <main className="main">
            <div className="heading">
              <p className="p1">How does it <span className="work">Work</span><span className="question-mark"> ?</span></p>
              <div className="line"></div>
              <p className="p2">We make it possible in a quick and easy few steps process, takes max 5 mins</p>
            </div>
            <div className="image">
              <Image className="photo" src="/images/main.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow">
        </div>
      </main>
    </div>
    <div id="slide1a" style={{visibility: currentDiv === 1 ? 'visible' : 'hidden',opacity: currentDiv === 1 ? 1 : 0 }}>
      <main className="main">
            <div className="heading1">
              <p className="p3">Step <span className="work">1</span></p>
              <div className="line"></div>
                <ul>
                    <li className="line_p1"><p>Tenant selects the property</p></li>
                    <br/>
                    <li className="line_p2"><p>Tenant selects flexible rent tenure & corresponding amount</p></li>
                </ul>
            </div>
            <div className="image1">
              <Image className="photo1" src="/images/step1a.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow1">
        </div>
        <div className="arrow">
            <Image className="arrow1" src="images/arrow.svg" alt="arrow-image" width={100} height={100} />
        </div>
      </main>
    </div>
    <div id="slide1b" style={{visibility: currentDiv === 2 ? 'visible' : 'hidden',opacity: currentDiv === 2 ? 1 : 0 }}>
      <main className="main">
            <div className="heading1">
              <p className="p3">Step <span className="work">1</span></p>
              <div className="line"></div>
                <ul>
                    <li className="line_p2"><p>Tenant selects the property</p></li>
                    <br/>
                    <li className="line_p1"><p>Tenant selects flexible rent tenure & corresponding amount</p></li>
                </ul>
            </div>
            <div className="image2">
              <Image className="photo2" src="/images/step1b.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow1">
        </div>
        <div className="arrow">
            <Image className="arrow2" src="images/arrow.svg" alt="arrow-image" width={100} height={100} />
        </div>
      </main>
    </div>
    <div id="slide2" style={{visibility: currentDiv === 3 ? 'visible' : 'hidden',opacity: currentDiv === 3 ? 1 : 0 }}>
      <main className="main">
            <div className="heading1">
              <p className="p3">Step <span className="work">2</span></p>
              <div className="line"></div>
                <ul>
                    <li className="step2_1"><p>Tenant selects Pay with Circle enabling :</p></li>
                    <br/>
                    <ul className="step2_2">
                        <li className="step2_3">Zero security deposit move-in</li>
                        <li className="step2_3">Reduced rent offer</li>
                        <li className="step2_3">3 months salary cover</li>
                    </ul>
                </ul>
            </div>
            <div className="image3">
              <Image className="photo3" src="/images/step2.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow2">
        </div>
        <div className="arrow">
            <Image className="arrow3" src="images/arrow.svg" alt="arrow-image" width={100} height={100} />
        </div>
      </main>
    </div>
    <div id="slide3" style={{visibility: currentDiv === 4 ? 'visible' : 'hidden',opacity: currentDiv === 4 ? 1 : 0 }}>
      <main className="main">
            <div className="heading2">
              <p className="p3">Step <span className="work">3</span></p>
              <div className="line"></div>
                <ul>
                    <li className="step2_1 step3" ><p>Smooth Onboarding for the Tenant begins</p></li>
                </ul>
            </div>
            <div className="image4">
              <Image className="photo4" src="/images/step3.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow3">
        </div>
        <div className="arrow">
            <Image className="arrow4" src="images/arrow.svg" alt="arrow-image" width={100} height={100} />
        </div>
      </main>
    </div>
    <div id="slide4" style={{visibility: currentDiv === 5 ? 'visible' : 'hidden',opacity: currentDiv === 5 ? 1 : 0 }}>
      <main className="main">
            <div className="heading1">
              <p className="p3">Step <span className="work">4</span></p>
              <div className="line"></div>
                <ul>
                    <li className="step2_1 step4 " ><p>Tenant gets approved to move-in :</p></li>
                    <br/>
                    <ul className="step2_2">
                        <li className="step2_3 step4b">Gets Zero-security deposit approval</li>
                        <li className="step2_3 step4b">Zero cost EMI = Monthly Rent</li>
                    </ul>
                </ul>
            </div>
            <div className="image4">
              <Image className="photo5" src="/images/step4.svg" alt="main-image" width={100} height={100}/>
            </div>
        <div className="slider">
        </div>
        <div className="shadow4">
        </div>
        <div className="arrow">
            <Image className="arrow5" src="images/arrow.svg" alt="arrow-image" width={100} height={100} />
        </div>
      </main>
    </div>
    <div className="box">
          <div className="box-inner"></div>
          <div className="box-ball"></div>
    </div>
    <div className="background"></div>
    </>
  );
}
