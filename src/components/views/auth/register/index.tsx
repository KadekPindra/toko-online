const RegisterView = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="phone"
          className="border border-gray-300 p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
