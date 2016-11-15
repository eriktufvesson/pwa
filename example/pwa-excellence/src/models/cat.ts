export class Cat {
  constructor(
    public id: string,
    public url: string,
    public source_url: string,
    public hidden = false
  ) { }
}