## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Writing Tests for Concurrent Scenarios  
#### ❓ Question 1141: Writing tests for concurrent scenarios

Write a Rust unit test that does the following:

- Spawns multiple threads that increment a shared counter concurrently.
- Verifies that the final value matches the expected result.

🔧 **Task:** Use `std::thread` and `Arc<Mutex<T>>` to write a test for a concurrent counter.
