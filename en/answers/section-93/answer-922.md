## 📘 Section: Embedded OS and RTOS Development
### 🔹 Category: Writing Minimal Task Schedulers in Rust
#### ✅ Answer 922: Writing minimal task schedulers in Rust

A task scheduler manages the execution of multiple tasks on a microcontroller. A minimal round-robin scheduler can be implemented by storing tasks in a list and running them in sequence. Example:

```rust
fn main() {
    let mut tasks: Vec<Box<dyn FnMut()>> = vec![
        Box::new(|| println!("Task 1")),
        Box::new(|| println!("Task 2")),
    ];
    for _ in 0..3 {
        for task in tasks.iter_mut() {
            task();
        }
    }
}
```

This simple scheduler runs each task in turn. Real embedded schedulers handle timing and preemption.
