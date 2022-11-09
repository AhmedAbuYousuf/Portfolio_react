import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // const refForm = useRef

    // const sendEmail = (e) => {
    //     e.preventDefault()

    //     emailjs
    //         .sendForm(
    //             'gmail',
    //             '',
    //             refForm.current,
    //             ''
    //         )
    // }
    
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in working in an IT Firm - especially big ones
                    that would help me grow my skills. I am also interested in 
                    Freelance work regardless of the size of the project.
                </p>
                <div className='contact-form'>
                    {/* <form ref={refForm} onSubmit={sendEmail}> */}
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" require />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" require />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" 
                                name="message" 
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact