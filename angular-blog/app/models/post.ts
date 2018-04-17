function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const generator = generateId();

export class Post {
  public id: number;
  constructor(
    public title: string,
    public publishDate: string,
    public image: string,
    public description: string,
    public category: string
  ) {
    this.id = generator.next().value;
  }
}
