import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";

describe("App", () => {
  it("renders title", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find("h1").text()).toMatch("Todo App");
  });

  it("renders label, input", () => {
    const wrapper = shallowMount(App);

    // '할 일 작성'이라는 텍스트가 화면에 출력됩니다.
    expect(wrapper.find("label").text()).toMatch("할 일 작성");

    // 할 일을 작성할 수 있는 'control'이 화면에 출력됩니다.
    expect(wrapper.find("input").attributes("placeholder")).toMatch(
      "할 일을 작성해주세요"
    );
  });

  it("connects label and input", () => {
    const wrapper = shallowMount(App);
    const TODO_CONTROL = "todo-control";

    expect(wrapper.find("label").attributes("for")).toMatch(TODO_CONTROL);
    expect(wrapper.find("input").attributes("id")).toMatch(TODO_CONTROL);
  });

  it("renders button", () => {
    const wrapper = shallowMount(App);

    // '추가하기'라는 버튼이 화면에 출력됩니다.
    expect(wrapper.find("button").text()).toMatch("추가하기");
  });
});
