## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Pattern matching with references and mutability  
#### ✅ Answer 289: Pattern matching with references and mutability

In this example, an integer variable is handled using both reference (`ref`) and mutable reference (`ref mut`) pattern matching. The `match` statement uses `ref` to access a reference to the variable and `ref mut` to access a mutable reference, allowing you to read and modify the value.

```rust
fn main() {
    let mut x = 10;
    match x {
        ref r => println!("ref: {}", r),
    }
    match x {
        ref mut m => {
            *m += 5;
            println!("ref mut: {}", m);
        }
    }
}
```
