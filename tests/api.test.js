const app = require("../index");
const supertest = require("supertest");

const request = supertest(app);

//Algorithm Tests

//Binary Search Tests
test("Testing Algorithm API (Binary Search)", async () => {
  const res = await request.post("/api/algorithm/binarySearch").send({
    array: [],
    number: 3,
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (Binary Search)", async () => {
  const res = await request.post("/api/algorithm/binarySearch").send({
    array: [1, 2, "3", 4, 5],
    number: 3,
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (Binary Search)", async () => {
  const res = await request.post("/api/algorithm/binarySearch").send({
    array: [1, 2, 3, 4, 5],
    number: 3,
  });
  expect(res.statusCode).toBe(200);
});

//Quick Sort tests
test("Testing Algorithm API (Quick Sort)", async () => {
  const res = await request.post("/api/algorithm/quickSort").send({
    array: [],
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (Quick Sort)", async () => {
  const res = await request.post("/api/algorithm/quickSort").send({
    array: [4, "3", 5, 2, 1],
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (Quick Sort)", async () => {
  const res = await request.post("/api/algorithm/quickSort").send({
    array: [4, 3, 5, 2, 1],
  });
  expect(res.statusCode).toBe(200);
});

//Breath First Search Tests
test("Testing Algorithm API (BreathFirstSearch)", async () => {
  const res = await request.post("/api/algorithm/breadthFirstSearch").send({
    number: 3,
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (BreathFirstSearch)", async () => {
  const res = await request.post("/api/algorithm/breadthFirstSearch").send({
    array: { 1: [2, 3], 2: [1], 3: [1] },
  });
  expect(res.statusCode).toBe(400);
});

test("Testing Algorithm API (BreathFirstSearch)", async () => {
  const res = await request.post("/api/algorithm/breadthFirstSearch").send({
    array: { 1: [2, 3], 2: [1], 3: [1] },
    number: 3,
  });
  expect(res.statusCode).toBe(200);
});

//Logs Tests

test("Testing Log API", async () => {
  const res = await request.get("/api/algorithm/logsZ");
  expect(res.statusCode).toBe(404);
});

test("Testing Log API", async () => {
  const res = await request.get(
    "/api/algorithm/logs?algorithmName=Binary Search ss"
  );
  expect(res.statusCode).toBe(404);
});

test("Testing Log API", async () => {
  const res = await request.get("/api/algorithm/logs");
  expect(res.statusCode).toBe(200);
});

test("Testing Log API", async () => {
  const res = await request.get(
    "/api/algorithm/logs?algorithmName=Binary Search"
  );
  expect(res.statusCode).toBe(200);
});
