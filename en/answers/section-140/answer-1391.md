## 📘 Section: Architectural Refactoring and Evolution  
### 🔹 Category: Architectural Refactoring and Evolution  
#### ✅ Answer 1391: Refactoring legacy Rust codebases

To reduce code duplication, a function was abstracted. Before refactoring, the same code appeared in multiple places. After refactoring, the common logic was moved into a function, eliminating repetition.

```rust
// Before refactoring
fn main() {
    println!("Hello, Alice!");
    println!("Hello, Bob!");
}

// After refactoring
fn greet(name: &str) {
    println!("Hello, {name}!");
}

fn main() {
    greet("Alice");
    greet("Bob");
}
```

This change makes the code easier to maintain, reduces the risk of errors, and improves readability.
