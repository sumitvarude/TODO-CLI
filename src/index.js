#!/usr/bin/env node
import {getEvenNumberedTodos} from "./services/todoService.js";

const printTodosWithStatus = async () => {
  const results = await getEvenNumberedTodos()
  results.forEach(result => {
    if (result.status === 'fulfilled' && result.value) {
      console.log(`Title: ${result.value.title}, Completed: ${result.value.completed}`);
    } else if (result.status === 'rejected') {
      console.error(`Failed to fetch TODO: ${result.reason}`);
    }
  });
}

printTodosWithStatus();
