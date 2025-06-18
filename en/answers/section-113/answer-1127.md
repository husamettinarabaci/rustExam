## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: State management inside actors
#### ✅ Answer 1127: State management inside actors

An actor keeps its internal state in struct fields and updates it based on incoming messages.

```rust
struct CounterActor {
    count: usize,
}

impl CounterActor {
    fn handle_increment(&mut self) {
        self.count += 1;
    }
}

// Usage:
let mut actor = CounterActor { count: 0 };
actor.handle_increment();
println!("Count: {}", actor.count);
```
Here, the actor's state (`count`) is updated in response to a message.
