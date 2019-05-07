export class TodoModel {
	constructor(key, Utils) {
		this.key = key
		this.Utils = Utils
		this.todos = this.Utils.store(key)
		this.onChanges = []
	}

	subscribe = onChange => {
		this.onChanges.push(onChange)
	}

	inform = () => {
		this.Utils.store(this.key, this.todos)
		this.onChanges.forEach(cb => cb())
	}

	addTodo = title => {
		this.todos = this.todos.concat({
			id: this.Utils.uuid(),
			title: title,
			completed: false
		})

		this.inform()
	}

	toggleAll = checked => {
		// Note: it's usually better to use immutable data structures since they're
		// easier to reason about and React works very well with them. That's why
		// we use map() and filter() everywhere instead of mutating the array or
		// todo items themselves.
		this.todos = this.todos.map(todo => {
			return this.Utils.extend({}, todo, { completed: checked })
		})

		this.inform()
	}

	toggle = todoToToggle => {
		this.todos = this.todos.map(todo => {
			return todo !== todoToToggle ? todo : this.Utils.extend({}, todo, { completed: !todo.completed })
		})

		this.inform()
	}

	destroy = todo => {
		this.todos = this.todos.filter(candidate => {
			return candidate !== todo
		})

		this.inform()
	}

	save = (todoToSave, text) => {
		this.todos = this.todos.map(todo => {
			return todo !== todoToSave ? todo : this.Utils.extend({}, todo, { title: text })
		})

		this.inform()
	}

	clearCompleted = () => {
		this.todos = this.todos.filter(todo => {
			return !todo.completed
		})

		this.inform()
	}
}
