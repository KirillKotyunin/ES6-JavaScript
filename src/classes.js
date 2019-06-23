class Task {
  constructor(title = getDefaultTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  get done() {
    return this._done === true ? 'Выполнено' : 'Не выполнено';
  }

  set done(value) {
    if(value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.error('Ошибка, укажите true или false');
    }
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена`);
  }

  static getDefaultTitle() {
    return 'Задача';
  }
}

Task.count = 0;

let task = new Task('Убрать комнату');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);