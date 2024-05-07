import {getArrayWithEvenNumbers} from "../utils/utils.js";

export const fetchTodo = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return {status: 'rejected', reason: error.message};
  }
};

export const getEvenNumberedTodos = async (noOfTodosToFetch = 20) => {
  const evenIds = getArrayWithEvenNumbers(noOfTodosToFetch);
  const promises = evenIds.map(id => fetchTodo(id));
  return await Promise.allSettled(promises);
};