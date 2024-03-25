import { newTodo } from '@/utils/action'

const NewTodoForm = () => {
  return (
    <form action={newTodo}>
      <input name="content" type="text" className="border border-black/25" />
      <button type="submit">new todo</button>
    </form>
  )
}

export default NewTodoForm
