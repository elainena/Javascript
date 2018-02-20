// var input = document.getElementById('input-todo');

// input.addEventListener('keyup', function() {
//   if (input.value.length >= 1) {
//     document.getElementById('todo-list').innerHTML =
//   }
// }
// })

function() {
  var inputTodo = document.getElementById('input-todo');
  var todoList = document.getElementById('todos');

  console.log(inputTodo, todoList);
  inputTodo.addEventListener('keyup', function(e) {
      // console.log('KEYUP', e.keycode);
      if (e.keycode !== 13) return;
      if (!this.value) {
        console.log(this.value);
        todoList.innerHTMl = '<li>' + this.value + '</li>'
      }
    }
  }