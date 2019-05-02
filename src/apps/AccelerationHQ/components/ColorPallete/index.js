import React from 'react'
import { colors } from '../colors'
import './index.scss'

export const VmsColorPallete = ({ color }) => {
  return (
    <div className='color-palette'>
      {color
        ? colors[color].map(currentColor => (
          <div className='color-card-container'>
            <div className={`color-card color-${currentColor}`} style={{ background: currentColor }} />
            <div className='currentColor' style={{ color: '#000' }}>
              {currentColor}
            </div>
          </div>
        ))
        : Object.keys(colors).map(currentColor => <ColorCard currentColor={currentColor} />)}
    </div>
  )
}

const ColorCard = ({ currentColor }) => (
  <div className={`color-card color-${currentColor}`} style={{ background: colors[currentColor][4] }}>
    {colors[currentColor].slice(0, 4).map(shade => (
      <div className={`shade-${shade}`} style={{ background: shade }} />
    ))}

    <div style={{ position: 'absolute', bottom: '-20px', left: '40%', color: '#000' }}>#{colors[currentColor][0]}</div>
  </div>
)
