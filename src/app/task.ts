export default class Task {
  id: String;
  title: string;
  constructor(task?) {
    const data = task || {};
    this.id = data.id;
    this.title = data.title;
  }
}
