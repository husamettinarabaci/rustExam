## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Debugging Deadlocks and Race Conditions  
#### ✅ Answer 1144: Debugging deadlocks and race conditions

A deadlock occurs when threads wait on each other indefinitely. A race condition happens when threads access shared data unsafely. In Rust:
- Use `Arc` and `Mutex` carefully to avoid lock order issues.
- Use thread sanitizer (TSan) to detect races.
- Add `println!` or logging to trace lock acquisition.
- Run `cargo run --target x86_64-unknown-linux-gnu -Z sanitizer=thread` for TSan.

Break code into small parts and review lock usage to debug these issues.
