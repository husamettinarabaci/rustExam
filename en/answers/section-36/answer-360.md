## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Capturing and mutating variables with move closures  
#### ✅ Answer 360: Capturing and mutating variables with move closures

In this example, the `move` keyword makes the closure take ownership of the vector. The closure can mutate the vector, but after the closure is created, the original vector is no longer accessible in the outer scope. Attempting to use it will result in a compile-time error due to Rust's ownership rules.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3];
    let mut modify = move || {
        numbers[0] = 42;
        println!("Inside: {:?}", numbers);
    };
    modify();
    // println!("Outside: {:?}", numbers); // ERROR: numbers can no longer be used
}
```
