## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Compile-Time State Machines
#### ✅ Answer 1273: Building compile-time finite state machines

You can model FSMs at compile time using types and traits:

```rust
struct StateA;
struct StateB;
struct StateC;

trait Next {
    type Output;
    fn next(self) -> Self::Output;
}

impl Next for StateA {
    type Output = StateB;
    fn next(self) -> StateB { StateB }
}
impl Next for StateB {
    type Output = StateC;
    fn next(self) -> StateC { StateC }
}

fn main() {
    let a = StateA;
    let b = a.next();
    let _c = b.next();
}
```

Transitions are enforced by the type system.
