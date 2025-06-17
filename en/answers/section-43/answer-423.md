## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Using enums to model states and transitions  
#### ✅ Answer 423: Using enums to model states and transitions

Enums are ideal for modeling the states of an object or system and the transitions between them. Each state is represented as an enum variant.

```rust
enum State {
    Start,
    Running,
    Paused,
    Stopped,
}

fn next_state(state: State) -> State {
    match state {
        State::Start => State::Running,
        State::Running => State::Paused,
        State::Paused => State::Stopped,
        State::Stopped => State::Stopped,
    }
}
```
