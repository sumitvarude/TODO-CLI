import {jest} from '@jest/globals'
import {fetchTodo, getEvenNumberedTodos} from './todoService.js';

fetch = jest.fn();
const expectedTodo = {
  userId: 1,
  id: 10,
  title: 'accusamus eos facilis sint et aut voluptatem',
  completed: true
};

describe('todoService', () => {
  describe('fetchTodo', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it('should fetch todo with provided ID', async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(expectedTodo),
        })
      );
      const todo = await fetchTodo(10);
      expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/10");
      expect(todo).toStrictEqual(expectedTodo);
    });

    it('should return rejected response if any error occurs while fetching todo ', async () => {
      fetch.mockImplementationOnce(() => Promise.reject(new Error("Could not fetch todo")));
      const todo = await fetchTodo(20);
      expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/20");
      expect(todo).toStrictEqual({
        reason: "Could not fetch todo",
        status: "rejected",
      });
    });
  });

  describe('getArrayWithEvenNumbers', () => {
    beforeEach(() => {
      fetch.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(expectedTodo),
        })
      );
    })
    it('should fetch 3 todos', async () => {

      const results = await getEvenNumberedTodos(3);
      expect(results).toStrictEqual([{
        "status": "fulfilled",
        "value": {"completed": true, "id": 10, "title": "accusamus eos facilis sint et aut voluptatem", "userId": 1}
      }, {
        "status": "fulfilled",
        "value": {"completed": true, "id": 10, "title": "accusamus eos facilis sint et aut voluptatem", "userId": 1}
      }, {
        "status": "fulfilled",
        "value": {"completed": true, "id": 10, "title": "accusamus eos facilis sint et aut voluptatem", "userId": 1}
      }]);
    });

    it('should fetch default 20 todos', async () => {
      const results = await getEvenNumberedTodos();
      expect(results.length).toEqual(20);
    });
  });
});