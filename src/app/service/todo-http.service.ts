import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  items: ToDoItem[] = [];

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItems');
  }

  getItemDone(id: number) {
    const currentItem = this.items.find((item) => item.id === id);
    if (currentItem) {
      currentItem.isDone = true;
    }
  }
}
