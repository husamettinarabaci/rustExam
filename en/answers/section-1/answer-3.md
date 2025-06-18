## 📘 Section: Getting Started  
### 🔹 Category: Variables and Constants  
#### ✅ Answer 3: Difference between `let` and `const` in Rust

**Explanation:**

In Rust, `let` is used to declare variables, which can be mutable or immutable. `const` is used to declare constants, which must have a type annotation and cannot be changed after compilation. Constants are always immutable and are set at compile time.

```rust
fn main() {
    // Mutable variable declared with let
    let mut x = 5;
    // Constant declared with const (must have type annotation)
    const Y: i32 = 10;

    x = 7; // Changing the value of x is allowed because it's mutable
    // Y = 12; // This would cause a compile error because constants cannot be changed

    println!("x: {}", x);
    println!("Y: {}", Y);
}
```
