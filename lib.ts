import { CustomError } from "./errors";

export class SomeClass {
  constructor() {}

  doSomething() {
    throw new CustomError("something went wrong");
  }
}
