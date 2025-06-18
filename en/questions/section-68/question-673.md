## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Wrapping and chaining errors with context
#### ❓ Question 673: Wrapping and chaining errors with context

Write a Rust program that demonstrates how to wrap and chain errors with additional context:

- Use the `anyhow` or `eyre` crate to propagate errors with context.
- Write a function that can fail and returns a `Result`.
- In the error path, wrap the error with extra context using `.context()`.
- Show how the error chain is displayed when the error is printed.

🔧 **Task:** Demonstrate error propagation and context chaining for better diagnostics.
