## 📘 Section: Futures and Async Primitives
### 🔹 Category: Using Waker for task wakeup
#### ❓ Question 1045: Using `Waker` for task wakeup in async

Write Rust code that does the following:

- In your own `Future` implementation, use a `Waker` to manually wake a task.
- Show that after a task is suspended, it can be woken by another task.
- Demonstrate the use of `std::task::Waker` and `Context`.

🔧 **Task:** Demonstrate manual task wakeup using `Waker` in a custom future.
