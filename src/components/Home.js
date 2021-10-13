import '../App.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = (props) => {
    const { selectedColor } = props;

    return (
        <div className={`home ${selectedColor}`}>
            <div className='pattern'>
                <svg viewBox='0 0 100 100'>
                    <defs>
                        <pattern id='pattern' x='0%' y='0%' width='100%' height='100%' patternUnits='userSpaceOnUse'>
                            <path id='first' d='M1,1  Q50,10 99,1  Q90,50 99,99  Q50,90 1,99  Q10,50 1,1 Z' />
                        </pattern>

                        <pattern id='pattern2' x='0%' y='0%' width='100%' height='100%' patternUnits='userSpaceOnUse'>
                            <circle id='second' cx='50' cy='50' r='40' />
                        </pattern>
                    </defs>

                    <rect x='0' y='0' width='100%' height='100%' fill='url(#pattern)'></rect>
                    <rect x='0' y='0' width='100%' height='100%' fill='url(#pattern2)'></rect>
                </svg>
            </div>
            <div className='pattern'>
                <svg viewBox='0 0 100 100' className='App-logo'>
                    <defs>
                        <pattern id='pattern3' x='0%' y='0%' width='100%' height='100%' patternUnits='userSpaceOnUse'>
                            <path id='third' d='M25,75  Q50,95 75,75  M25,25  Q50,5 75,25' />
                        </pattern>
                    </defs>

                    <rect x='0' y='0' width='100%' height='100%' fill='url(#pattern3)'></rect>
                </svg>
            </div>

            <div className='info'>
                <h1>Bhárbara Cechin</h1>
                {/* <p>Full Stack Developer at <a href='https://www.blink.com.br/' target='_blank' rel='noreferrer'>Blynk Systems</a></p> */}
                <p>Desenvolvedora Full Stack em <br/> <a href='https://www.blink.com.br/' target='_blank' rel='noreferrer'>Blynk Systems</a></p>
                <a href='https://github.com/bhcechin/' target='_blank' rel='noreferrer' ><FaGithub className='icon' /></a>
                <a href='https://www.linkedin.com/in/bhcechin/' target='_blank' rel='noreferrer' ><FaLinkedin className='icon' /></a>
            </div>
        </div>
    )
}

// Home.defaultProps = {
//     title: 'Name Tracker',
// }

export default Home
