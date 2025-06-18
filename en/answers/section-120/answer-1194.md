## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Event-driven concurrency models  
#### ✅ Answer 1194: Event-driven concurrency models

The event-driven concurrency model is an approach where operations are executed in response to events. In Rust, this is often implemented with an event loop. Each event is queued and processed in the loop.

**Simple event loop example:**
```rust
use std::collections::VecDeque;

fn main() {
    let mut events = VecDeque::from(vec!["start", "data", "end"]);
    while let Some(event) = events.pop_front() {
        match event {
            "start" => println!("Starting..."),
            "data" => println!("Processing data..."),
            "end" => println!("Done."),
            _ => (),
        }
    }
}
```

Advantages: Efficient resource usage, easy to manage many concurrent events. Commonly used in network servers, GUI applications, and async IO tasks.
