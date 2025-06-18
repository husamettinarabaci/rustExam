## 📘 Section: Control Flow  
### 🔹 Category: Loops  
#### ✅ Answer 24: Creating a counter loop with `loop` and `break`

**Explanation:**

The `loop` keyword creates an infinite loop. You can use `break` to exit the loop when a condition is met.

```rust
fn main() {
    let mut counter = 0;
    loop {
        println!("Counter: {}", counter);
        counter += 1;
        if counter == 5 {
            break;
        }
    }
}
```
