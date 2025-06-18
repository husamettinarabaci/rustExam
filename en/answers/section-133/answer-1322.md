## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Compile-Time Guarantees with Typestates  
#### ✅ Answer 1322: Compile-time guarantees with typestates

The typestate pattern ensures that only certain methods can be called on an object in a specific state, preventing misuse at compile time.

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
    // door.open().close(); // Compile-time error if misused
}
```
Here, the door can only be opened or closed in the correct state, enforced by the type system.
