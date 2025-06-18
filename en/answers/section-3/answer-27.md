## 📘 Section: Control Flow  
### 🔹 Category: Loops  
#### ✅ Answer 27: Breaking a `for` loop on a specific value

**Explanation:**

You can use `break` to exit a `for` loop when a condition is met.

```rust
fn main() {
    for i in 1..=10 {
        if i == 6 {
            break;
        }
        println!("i: {}", i);
    }
}
```
