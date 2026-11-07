const UserService = require("./userService");

describe("UserService", () => {
  let userRepository;
  let userService;

  beforeEach(() => {
    userRepository = {
      findByEmail: jest.fn(),
      create: jest.fn()
    };
    userService = new UserService(userRepository);
  });

  test("registers a new user through the mocked repository", async () => {
    userRepository.findByEmail.mockResolvedValue(null);
    userRepository.create.mockResolvedValue({
      id: 7,
      name: "Alice",
      email: "alice@example.com"
    });

    await expect(
      userService.registerUser({
        name: " Alice ",
        email: "ALICE@EXAMPLE.COM"
      })
    ).resolves.toEqual({
      id: 7,
      name: "Alice",
      email: "alice@example.com"
    });

    expect(userRepository.findByEmail).toHaveBeenCalledWith("ALICE@EXAMPLE.COM");
    expect(userRepository.create).toHaveBeenCalledWith({
      name: "Alice",
      email: "alice@example.com"
    });
  });

  test("does not create a duplicate user", async () => {
    const existingUser = { id: 3, email: "alice@example.com" };
    userRepository.findByEmail.mockResolvedValue(existingUser);

    await expect(
      userService.registerUser({
        name: "Alice",
        email: "alice@example.com"
      })
    ).rejects.toThrow("Email is already registered");

    expect(userRepository.findByEmail).toHaveBeenCalledWith("alice@example.com");
    expect(userRepository.create).not.toHaveBeenCalled();
  });
});
