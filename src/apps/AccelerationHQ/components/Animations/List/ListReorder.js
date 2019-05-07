import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { VmsButton } from '../../VmsButton'
import { DropdownArrow } from '../../Icons'
import shuffle from 'lodash/shuffle'
import data from './data'
import './index.scss'

export function ListReorder() {
	const [ rows, set ] = useState(data)

	let height = 0
	const transitions = useTransition(
		rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
		d => d.name,
		{
			from: { height: 0, opacity: 0 },
			leave: { height: 0, opacity: 0 },
			enter: ({ y, height }) => ({ y, height, opacity: 1 }),
			update: ({ y, height }) => ({ y, height })
		}
	)

	return (
		<div
			style={{
				display: 'flex',
				width: '100vw',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				position: 'relative'
			}}
		>
			<div
				style={{
					top: '100px',
					left: '100px',
					position: 'absolute'
				}}
			>
				<VmsButton buttonType={`primary`} Icon={DropdownArrow}>
					<span onClick={() => set(shuffle, [])}>Reorder List</span>
				</VmsButton>
			</div>

			<div class="list" style={{ height }}>
				{transitions.map(({ item, props: { y, ...rest }, key }, index) => (
					<animated.div
						key={key}
						class="card"
						style={{
							zIndex: data.length - index,
							transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
							...rest
						}}
					>
						<div class="cell">
							<div
								class="details"
								style={{ backgroundImage: item.css, display: 'flex', alignContent: 'center' }}
							>
								<p>Employee</p>
							</div>
						</div>
					</animated.div>
				))}
			</div>
		</div>
	)
}
