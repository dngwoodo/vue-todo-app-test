<template>
  <div>
    <h1>Todo App</h1>
    <form>
      <label for="todo-control">할 일 작성</label>
      <div>
        <input
          id="todo-control"
          type="text"
          placeholder="할 일을 작성해주세요"
          :value="text"
          @input="handleChange"
        />
        <button type="button">추가하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleChange(event) {
      this.text = event.target.value;
    },
  },
};
</script>
