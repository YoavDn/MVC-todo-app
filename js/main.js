"use strict"

function onInit() {
  renderTodos()
}

function renderTodos() {
  const todos = getTodosForDisplay()

  const strHTMLs = todos.map(
    todo =>
      `<li class="${todo.isDone ? "done" : ""}" onclick="onToggleTodo('${
        todo.id
      }')">
                ${todo.txt}
                <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
            </li>`
  )

  document.querySelector("ul").innerHTML = strHTMLs.join("")
  document.querySelector(".total-count").innerText = getTotalCount()
  document.querySelector(".active-count").innerText = getActiveCount()
  document.querySelector(".done-todos").innerText = getDoneCount()
}

function onRemoveTodo(ev, todoId) {
  ev.stopPropagation()
  console.log("Removing", todoId)
  const deleteConfirm = confirm("are you sure ?")

  if (deleteConfirm) {
    removeTodo(todoId)
    renderTodos()
  }
}

function onToggleTodo(todoId) {
  console.log("Toggling", todoId)
  toggleTodo(todoId)
  renderTodos()
}

function onAddTodo(ev) {
  ev.preventDefault()
  const elTxt = document.querySelector("[name=txt]")
  const elImportence = document.querySelector("[name=importance]")
  const txt = elTxt.value
  const importance = elImportence.value
  console.log("Adding todo", txt)
  if (!txt) return
  addTodo(txt, importance)
  renderTodos()
  elTxt.value = ""
}

function onSetFilter(status) {
  console.log("Filtering by", status)
  setFilterByStatus(status)
  renderTodos()
}

function onSetFilterByTxt(filterByTxt) {
  console.log("Filtering by txt", filterByTxt)
  setFilterByTxt(filterByTxt)
  renderTodos()
}

function onSorting(value) {
  renderTodos()
}

function foo(ev) {
  ev.preventDefault()
  console.log("Foo!")
}

function onSortTodos(ev) {
  ev.preventDefault()

  const elSortSelect = document.querySelector("[name=sort-todos]")
  const sortValue = elSortSelect.value

  console.log(sortValue)
  getSortedTodos(sortValue)
  renderTodos()
}
