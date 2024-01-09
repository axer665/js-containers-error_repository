import ErrorRepository from "./classes/ErrorRepository";

const errors = new ErrorRepository();

console.log(errors.translate(404));