import shortid from 'shortid';

export default class Task {
  id: String;
  constructor(public title: string) {
    this.id = shortid.generate();
  }
}
