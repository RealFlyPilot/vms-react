import React, { Component } from 'react'
import { ToDoFooter } from './ToDoFooter'
import { ToDoItem } from './ToDoItem'
import './index.scss'

export class ToDoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: null,
			newTodo: '',
			ALL_TODOS: [],
			ACTIVE_TODOS: [],
			COMPLETED_TODOS: [],
			nowShowing: []
		}
	}

	componentDidMount = () => {
		this.setState({
			//   nowShowing: this.state.ALL_TODOS,
			ALL_TODOS: this.props.todos
		})
	}

	handleChange = event => {
		this.setState({ newTodo: event.target.value })
	}

	handleNewTodoKeyDown = event => {
		const { newTodo, ALL_TODOS } = this.state
		const todos = ALL_TODOS
		if (event.keyCode === 13) {
			event.preventDefault()
			if (newTodo) {
				// this.props.model.addTodo(newTodo)
				todos.push(newTodo)

				this.setState({
					ALL_TODOS: todos,
					newTodo: ''
				})
			}
		}
	}

	toggleAll = event => {
		var checked = event.target.checked
		this.props.model.toggleAll(checked)
	}

	toggle = todoToToggle => {
		this.props.model.toggle(todoToToggle)
	}

	destroy = todo => {
		this.props.model.destroy(todo)
	}

	edit = todo => {
		this.setState({ editing: todo.id })
	}

	save = (todoToSave, text) => {
		this.props.model.save(todoToSave, text)
		this.setState({ editing: null })
	}

	cancel = () => {
		this.setState({ editing: null })
	}

	clearCompleted = () => {
		this.props.model.clearCompleted()
	}

	render() {
		let footer
		let main
		let todos = this.props.todos ? this.props.todos : this.state.ALL_TODOS
		let shownTodos
		if (todos) {
			shownTodos = todos.filter(function(todo) {
				switch (this.state.nowShowing) {
					case 'ACTIVE_TODOS':
						return !todo.completed
					case 'COMPLETED_TODOS':
						return todo.completed
					default:
						return true
				}
			}, this)
		}

		let todoItems = shownTodos
			? shownTodos.map(todo => (
					<ToDoItem
						key={todo.id}
						todo={todo}
						onToggle={this.toggle.bind(this, todo)}
						onDestroy={this.destroy.bind(this, todo)}
						onEdit={this.edit.bind(this, todo)}
						editing={this.state.editing === todo.id}
						onSave={this.save.bind(this, todo)}
						onCancel={this.cancel}
					/>
				))
			: null

		let activeTodoCount = todos.reduce(function(accum, todo) {
			return todo.completed ? accum : accum + 1
		}, 0)

		let completedCount = todos.length - activeTodoCount

		if (activeTodoCount || completedCount) {
			footer = (
				<ToDoFooter
					count={activeTodoCount}
					completedCount={completedCount}
					nowShowing={this.state.nowShowing}
					onClearCompleted={this.clearCompleted}
				/>
			)
		}

		if (todos.length) {
			main = (
				<section className="main">
					<input
						id="toggle-all"
						className="toggle-all"
						type="checkbox"
						onChange={this.toggleAll}
						checked={activeTodoCount === 0}
					/>
					<label htmlFor="toggle-all" />
					<ul className="todo-list">{todoItems}</ul>
				</section>
			)
		}

		return (
			<div style={{ width: '32vw' }}>
				<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						value={this.state.newTodo}
						onKeyDown={this.handleNewTodoKeyDown}
						onChange={this.handleChange}
						autoFocus={true}
					/>
				</header>
				{main}
				{footer}
			</div>
		)
	}
}
