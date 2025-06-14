## 📘 Section: Control Flow  
### 🔹 Category: Loops  
#### ✅ Answer 28: Skipping a loop iteration with `continue`

**Explanation:**

The `continue` statement skips the current iteration and moves to the next one.

```rust
fn main() {
    for i in 1..=5 {
        if i == 3 {
            continue;
        }
        println!("i: {}", i);
    }
}
```
