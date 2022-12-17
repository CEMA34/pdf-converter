import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import Script from 'next/script'




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


    /*const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = fileString => {
        console.log(fileString);
    };


    const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };*/

    let newImage, showImg;

    function loadFile(e) {
        showImg = document.getElementById('showImg');
        showImg.src = URL.createObjectURL(e.target.files[0]);

        newImage = document.createElement('img');
        newImage.src = URL.createObjectURL(e.target.files[0]);

        showImg.onload = function () {
            URL.revokeObjectURL(showImg.src)
        }
    };


    function pdfDown() {
        let doc = new jsPDF();
        doc.addImage(newImage, 10, 10);
        doc.save('ImgToPDF.pdf')
    }


    return (
        <>
            <div className='convert-section-background'>
                <section className='convert-section'>
                    <div className="nav-container">
                        <div className="nav-container-first-div">
                            <img className="logo" src="/images/converter-icon.png" alt="logo" />
                            <h1 className="nav-title">PDF Converter</h1>
                        </div>
                        <Link href="/">
                            <motion.button className='go-back-btn' whileHover={hover} whileTap={click} transition={transition} >Go Back</motion.button>
                        </Link>
                    </div>
                    <div className='convert-section-main'>
                        <div>
                            <h1 className='section-title'>All devices supported</h1>
                            <p className='section-para'>Our PDF Converter is browser-based and works for all platforms.
                                There is no need to download and install any software.</p>
                        </div>
                        <img src='images/screen-mockups.svg'></img>
                    </div>

                    <div className='convert-pdf-input-div'>
                        <h1 className='section-title'>Ready To Convert Your Documents ?</h1>
                        <img id="showImg" src="images/img.png" />
                        <div>
                            <motion.span className='pdf-btn' ><input onChange={loadFile} accept=".png, .jpg, .jpeg" type="file" />Select Files</motion.span>

                            <motion.button whileHover={hover} whileTap={click} transition={transition}
                                onClick={pdfDown} className='pdf-btn download-pdf-btn'>
                                Download PDF
                            </motion.button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function Footer() {
    return (

        <>

            <div className='footer-color-div'>


                <div className='footer-container second-index-footer'>
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


export default function SecondIndex() {
    return (
        <>
        <style>
            {`
            body {
                background-color: hsl(193, 100%, 96%);}
            `}
        </style>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></Script>
            <Head>
                {<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
                    rel="stylesheet"></link>}
                {<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                    rel="stylesheet"></link>}
            </Head>

            <Header />
            <Footer />

        </>
    )
}