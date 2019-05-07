import React from 'react'

import { SpringDraggableList } from './SpringDraggableList'


export const Draggable = ({ type }) => {
	return  < SpringDraggableList items = { ['Employee One', 'Employee Two', 'Employee Three', 'Employee Four']} />
}
