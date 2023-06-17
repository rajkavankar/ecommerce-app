export class CustomError extends Error {
  constructor(message, stack, code) {
    super(message, stack)
    this.code = code
  }
}
