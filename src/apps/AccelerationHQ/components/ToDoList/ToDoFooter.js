import React from 'react'
import { VmsButton } from '../VmsButton'

export const ToDoFooter = ({ onClearCompleted, activeTodoWord, count }) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{count}</strong> {activeTodoWord} left
			</span>
			<ul className="filters">
				<li>
					<a href="#/">
						{/* // className={classNames({ selected: nowShowing === app.ALL_TODOS })} */}
						All
					</a>
				</li>{' '}
				<li>
					<a href="#/active">
						{/* // className={classNames({ selected: nowShowing === app.ACTIVE_TODOS })} */}
						Active
					</a>
				</li>{' '}
				<li>
					<a href="#/completed">
						{/* // className={classNames({ selected: nowShowing === app.COMPLETED_TODOS })} */}
						Completed
					</a>
				</li>
				<li>
					{' '}
					<VmsButton cssClass="clear-completed" buttonType="primary" onClick={onClearCompleted}>
						Clear completed
					</VmsButton>
				</li>
			</ul>
		</footer>
	)
}
