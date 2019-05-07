import React from 'react'
import './index.scss'

export const GridOverlay = ({ children }) => {
	return <div className="grid-overlay">{children}</div>
}

export const GridHorizontal = ({ children }) => {
	return <div className="grid-horizontal" />
}
