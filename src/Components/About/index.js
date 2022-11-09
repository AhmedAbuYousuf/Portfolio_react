import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

        // useEffect(() => {
        // return setTimeout(() => {
        //     setLetterClass('text-animate-hover')
        // }, 4000)
    // }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx = {15}
                    />
                </h1>

                <p>
                    I am an eager learner who loves to tackle problems and 
                    try my hand at solving them efficiently. I enjoy coding 
                    and creatively solving problems to build towards something 
                    meaningful for the future.
                </p>

                <p>
                    I'm a very quick learner who is always trying to improve my 
                    skills and work in conditions that would help me improve them. 
                    I work well in a team and I'm very confident in my communication 
                    skills.
                </p>

                <p>
                    My aim is to be the best in the world and leave behind a legacy 
                    that people could proudly speak of, and can use it as an example 
                    for the nex generation to follow in.
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About