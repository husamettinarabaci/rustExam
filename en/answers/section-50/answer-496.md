## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Using Types and Enums to Eliminate Invalid States  
#### ✅ Answer 496: Using types and enums to eliminate invalid states

By using enums and type safety, invalid states can be prevented at compile time. Each state is modeled with an enum, and operations are only allowed in valid states.

```rust
enum State {
    Started,
    Stopped,
}

fn start(state: State) -> State {
    match state {
        State::Stopped => State::Started,
        State::Started => State::Started, // No change if already started
    }
}

fn main() {
    let state = State::Stopped;
    let state = start(state);
}
```
