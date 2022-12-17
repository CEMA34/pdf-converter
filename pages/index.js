import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"

const hover = {
  scale: 1.1,
}

const click = {
  scale: 0.9,
  borderRadius: "10px"
}

const transition = {
  type: "spring",
  stiffness: 300,
  damping: 17
}




function Header() {
  return (
    <div className="nav-container">
      <div className="nav-container-first-div">
        <img className="logo" src="/images/converter-icon.png" alt="logo" />
        <h1 className="nav-title">PDF Converter</h1>
      </div>
      <Link href="/SecondIndex" >
        <motion.button whileHover={hover} whileTap={click} transition={transition} >Try It Free</motion.button> </Link>
    </div>
  )
}

function FirstSection() {
  return (
    <div className='firstsection-color-div'>
      <div className='firstsection-container'>
        <h1 className='section-title'>
          Easily Convert To PDF In Seconds
        </h1>
        <p className='section-para'>
          No matter what types of files you need to convert,
          our online file converter is more than just a PDF file converter.
          It’s the go-to solution for all of your file conversion needs.
        </p>

        <Link href="/SecondIndex" ><motion.button whileHover={hover} whileTap={click} transition={transition}
          className='section-button'>Get Started For Free</motion.button></Link>

        <img src='images/screen-mockups.svg'></img>

        <div className='first-section-first-div'>
          <div>
            <img src="/images/pdf-icon.png"></img>
            <h1 className='section-title'>1.4k+</h1>
            <p>PDF's Converted</p>
          </div>
          <div>
            <img src="/images/icon-file.png" ></img>
            <h1 className='section-title'>2.7m+</h1>
            <p>Files Submitted</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SecondSection() {
  return (
    <div className='secondsection-container'>

      <div className='workflow-wave workflow-first-wave'></div>

      <div className='secondsection-inner-div-color'>

        <div className='secondsection-inner-div'>
          <div>
            <h1 className='section-title'>Fast and easy</h1>
            <p className='section-para'>Just drop your files on the page, choose an output format and click "Convert" button. Wait a little for the process to complete.
              We aim to do all our conversions in under 1-2 minutes.</p>
          </div>
          <motion.img
            initial={{ x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ type: "spring" }}
            viewport={{once:true}}
            src='/illustration-devices.svg'>
          </motion.img>
        </div>
      </div>

      <div className='workflow-wave workflow-second-wave'></div>



      <div className='secondsection-inner-div'>
      <motion.img
          initial={{ x: "100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ type: "spring" }}
          viewport={{once:true}}
          src='images/screen-mockups.svg'>
        </motion.img>
        <div>
          <h1 className='section-title'>Security guaranteed</h1>
          <p className='section-para'>We delete uploaded files instantly and converted ones after 24 hours. No one has access to your files and privacy is 100% guaranteed. </p>
        </div>
       
      </div>

      <div className='workflow-wave workflow-third-wave'></div>

      <div className='secondsection-inner-div-color'>
        <div className='secondsection-inner-div'>
          <div>
            <h1 className='section-title'>In the cloud</h1>
            <p className='section-para'>All conversions take place in the cloud and will not consume any capacity from your computer.</p>
          </div>
          <motion.img
            initial={{ x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ type: "spring" }}
            viewport={{once:true}}
            src='/images/illustration-your-users.svg'>
          </motion.img>
        </div>
      </div>
      <div className='workflow-wave workflow-fourth-wave'></div>

      <div className='ready-to-div'>
        <h1 className='section-title'>Ready To Convert Your PDF's ?</h1>
        <Link href="/SecondIndex" > <motion.button whileHover={hover} whileTap={click} transition={transition}
          className='section-button'>Get Started For Free</motion.button> </Link>
      </div>
    </div>
  )
}


function Footer() {
  return (

    <>
      <div className='workflow-wave footer-wave'></div>
      <div className='footer-color-div'>


        <div className='footer-container'>
          <div className='footer-first-div'>

            <div className='footer-logo-div'>
              <img className='footer-logo' src='icons8-converter-40.png'></img>
              <h1 className='section-title'>PDF Converter</h1>
            </div>

            <p className='section-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint</p>

            <div className='footer-information'>
              <img src="icon-phone.png"></img>
              <p className='section-para' >Phone: +1-543-123-4567</p>
            </div>

            <div className='footer-information'>
              <img src="icon-email.png"></img>
              <p className='section-para'>example@pdfconverter.com</p>
            </div>

          </div>

          <div className='footer-second-div'>
            <h1 className='section-title'>NEWSLETTER</h1>
            <p className='section-para'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
              send you spam or pass on your email address
            </p>

            <form>
              <input type="text" required></input>
              <motion.button whileHover={hover} whileTap={click} transition={transition}>Subscribe</motion.button>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}




export default function HomePage() {
  return (
    <>
      <Head>
        {<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"></link>}
        {<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"></link>}
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <Footer />
    </>
  )
}

