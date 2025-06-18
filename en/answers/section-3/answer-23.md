## 📘 Section: Control Flow  
### 🔹 Category: Pattern Matching  
#### ✅ Answer 23: Producing output based on a number using `match`

**Explanation:**

The `match` statement in Rust allows you to compare a value against patterns and execute code based on which pattern matches.

```rust
fn main() {
    let num = 2;
    match num {
        1 => println!("One"),
        2 => println!("Two"),
        _ => println!("Other"),
    }
}
```
