import React from 'react'
import { FaHammer } from 'react-icons/fa'

const Trabalhos = (props) => {
  const { selectedColor } = props;

  return (
    <div className={`trabalhos ${selectedColor}`}>
      <FaHammer className='icon'/>
      <p>Esta página está em construção :)</p>
    </div>
  )
}

export default Trabalhos
