<template>
  <div>
    <h1>Todo App</h1>
    <div>
      <label for="todo-control">할 일 작성</label>
      <div>
        <input
          id="todo-control"
          type="text"
          placeholder="할 일을 작성해주세요"
          :value="text"
          @input="handleInput"
        />
        <!-- @click="handleClickAddTodo" 추가 -->
        <button type="button" @click="handleClickAddTodo">추가하기</button>
      </div>
    </div>
    <!-- ul, li 태그 추가 -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      newId: 0, // 추가
      todos: [], // 추가
    };
  },
  methods: {
    handleInput(event) {
      this.text = event.target.value;
    },
    // 추가
    handleClickAddTodo() {
      // 할 일 추가
      this.todos.push({
        id: this.newId,
        text: this.text,
      });
      this.newId += 1;

      // input값 초기화
      this.text = "";
    },
  },
};
</script>
