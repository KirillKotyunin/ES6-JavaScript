class Task {
  constructor(title) {
    this._title = title;
    Task.count += 1;
    this.done = false;
    console.log('Создание задачи');
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  static getDefaultTitle() {
    return 'Задача';
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполена`);
  }
}

Task.count = 0;

class SubTask extends Task {
  constructor(title, parent) {
    super(title);
    this.parent = parent;
    console.log('Создание подзадачи');
  }

  complete() {
    super.complete();
    console.log(`Подзадача "${this.title}" выполена`);
  }
}

let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6', task);

task.complete();
subtask.complete();

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);