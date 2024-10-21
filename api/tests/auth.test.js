const request = require("supertest");
const app = require("../app"); // Your Express app
const prisma = require("../lib/prisma"); // Prisma client
const bcrypt = require("bcrypt");

beforeAll(async () => {
  // Optionally, clear the test database before tests start
  await prisma.user.deleteMany();
});

afterAll(async () => {
  // Disconnect from the database after tests
  await prisma.$disconnect();
});

describe("POST /register", () => {
  it("should register a new user", async () => {
    const response = await request(app)
      .post("/api/auth/v1/register")
      .send({
        username: "testuser",
        email: "test@example.com",
        password: "password123"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toBe("testuser created successfully");

    // Ensure the user was added to the database
    const user = await prisma.user.findUnique({
      where: { email: "test@example.com" }
    });
    expect(user).not.toBeNull();
  });

  it("should not register with an existing email", async () => {
    const response = await request(app)
      .post("/api/auth/v1/register")
      .send({
        username: "anotheruser",
        email: "test@example.com", // Same email as the previous test
        password: "password123"
      });
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("email already in use");
  });
});

describe("POST /login", () => {
  it("should log in an existing user", async () => {
    const response = await request(app)
      .post("/api/auth/v1/login")
      .send({
        email: "test@example.com",
        password: "password123"
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("testuser successfully logged in");
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("should not log in with invalid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/v1/login")
      .send({
        email: "wrong@example.com",
        password: "wrongpassword"
      });
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Invalid credentials");
  });
});

describe("POST /logout", () => {
  it("should log out the user", async () => {
    const response = await request(app)
      .post("/api/auth/v1/logout");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("User logged out successfully");
  });
});
