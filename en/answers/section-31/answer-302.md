## 📘 Section: Enums, Variants, and Algebraic Data Types
### 🔹 Category: Modeling State and Transitions
#### ✅ Answer 302: Using enums to model states and transitions

This problem demonstrates how to use enums to represent the different states of a process and handle transitions between them. Enums are ideal for modeling state machines and transitions in Rust.

```rust
// Enum representing process states
enum ProcessState {
    Started,
    InProgress(u8),
    Completed,
    Error(String),
}

fn main() {
    let mut state = ProcessState::Started;

    // State updates and messages
    match &state {
        ProcessState::Started => println!("Process started."),
        _ => {}
    }

    state = ProcessState::InProgress(42);
    match &state {
        ProcessState::InProgress(percent) => println!("In progress: {}%", percent),
        _ => {}
    }

    state = ProcessState::Completed;
    match &state {
        ProcessState::Completed => println!("Process completed!"),
        _ => {}
    }

    state = ProcessState::Error(String::from("An error occurred."));
    match &state {
        ProcessState::Error(msg) => println!("Error: {}", msg),
        _ => {}
    }
}
```
