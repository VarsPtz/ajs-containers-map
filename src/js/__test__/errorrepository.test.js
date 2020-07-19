import ErrorRepository from "../ErrorRepository"; 

const errorsArray = new ErrorRepository();

test("Ошибка 400 - success", () => {
  expect(errorsArray.translate(400)).toBe("Bad Request");
});

test("Ошибка 404 - success", () => {
  expect(errorsArray.translate(404)).toBe("Not Found");
});

test("Ошибка 500 - success", () => {
  expect(errorsArray.translate(500)).toBe("Internal Server Error");
});

test("Ошибки 700 - false", () => {
  expect(errorsArray.translate(700)).toBe("Unknown error");
});