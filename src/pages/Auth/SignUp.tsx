const SignUp = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>SignUp</h2>
        <label htmlFor="email" style={{ marginBottom: "8px" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          style={{
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <label htmlFor="password" style={{ marginBottom: "8px" }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          style={{
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
