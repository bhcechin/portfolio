import React from 'react'
import { FaHammer } from 'react-icons/fa'
import ss_shimano from '../Images/ss/ss_shimano.png'
import shimano_logo from '../Images/shimano_logo.png'
import blink_logo from '../Images/blink_logo.png'

const Trabalhos = (props) => {
  const { selectedColor } = props;

  const shimano = () => {
    window.open('http://shimanomexico.com/', '_blank');
  }

  return (
    <div className={`trabalhos ${selectedColor}`}>
      {/* <p><FaHammer className='icon'/> Esta página está em construção :)</p> */}
      <div className='grid-wrapper'>
        <div className='grid-div' onClick={shimano}>
          <div className='logo-wrapper'>
            <img src={blink_logo} alt='Blink Logo' className='logo'></img>
          </div>

          <img src={ss_shimano} alt='Screenshot da página principal do site da Shimano - México' className='ss'></img>
          <img src={shimano_logo} alt='Blink Logo' width='50%'></img>

          <p>E-commerce de produtos para ciclismo, desenvolvido na Blink Systems.</p>
        </div>

        <div className='grid-div' style={{alignItems: 'center', justifyContent: 'center', display: 'flex',}}>
          <p><FaHammer className='icon'/> Mais trabalhos a serem adicionados :)</p>
        </div>
      </div>
    </div>
  )
}

export default Trabalhos
