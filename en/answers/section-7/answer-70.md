## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Dangling References and Prevention  
#### ✅ Answer 70: Dangling references and prevention

**Explanation:**
Rust's borrow checker prevents dangling references by ensuring that references never outlive the data they point to. If you try to create a reference to a variable that goes out of scope, the compiler will produce an error. This guarantees memory safety.

```rust
fn main() {
    let r;
    {
        let x = 5;
        // r = &x; // Uncommenting this line will cause a compile error
    } // x is dropped here
    // println!("Dangling reference: {}", r); // Error: `x` does not live long enough

    // Correct usage:
    let y = 10;
    let r2 = &y;
    println!("Valid reference: {}", r2);
}
```
