## 📘 Section: Variables, Constants, and Types  
### 🔹 Category: Shadowing  
#### ✅ Answer 18: Changing variable types with shadowing

**Explanation:**

Shadowing allows you to declare a new variable with the same name and a different type.

```rust
fn main() {
    let x = 5;
    println!("Before shadowing: {}", x);
    let x = "five";
    println!("After shadowing: {}", x);
}
```
