import React from 'react'
import { colors } from '../colors'
import './index.scss'

export const VmsColorPallete = ({ color }) => {
  return (
    <div className='color-palette'>
      {color
        ? colors[color].map(currentColor => (
          <div
            className={`color-card color-${currentColor}`}
            style={{ background: currentColor }}
          >
            <div>{currentColor}</div>
            <div />
          </div>
        ))
        : Object.keys(colors).map(currentColor => (
          <ColorCard currentColor={currentColor} />
        ))}
    </div>
  )
}

const ColorCard = ({ currentColor }) => (
  <div
    className={`color-card color-${currentColor}`}
    style={{ background: colors[currentColor][4] }}
  >
    {colors[currentColor].slice(0, 4).map(shade => (
      <div className={`shade-${shade}`} style={{ background: shade }} />
    ))}
    <div>{currentColor}</div>
    <div>#{colors[currentColor][0]}</div>
    <div />
  </div>
)
