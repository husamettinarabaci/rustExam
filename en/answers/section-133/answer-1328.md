## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Compile-Time State Machine Implementation  
#### ✅ Answer 1328: Compile-time state machine implementation

Modeling a state machine with types allows only valid transitions at compile time. Here is an example for a door state machine.

```rust
struct Open;
struct Closed;

struct Door<State> {
    state: State,
}

impl Door<Closed> {
    fn open(self) -> Door<Open> {
        Door { state: Open }
    }
}

impl Door<Open> {
    fn close(self) -> Door<Closed> {
        Door { state: Closed }
    }
}

fn main() {
    let door = Door { state: Closed };
    let door = door.open();
    let door = door.close();
    // door.close(); // Compile-time error: Door is already closed
}
```
Only valid transitions are allowed by the type system.
