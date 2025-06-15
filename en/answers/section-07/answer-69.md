## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Reference Scope and Lifetimes  
#### ✅ Answer 69: Reference scope and lifetimes

In Rust, references are only valid within the scope in which they are created. If you try to use a reference outside its scope, the compiler will produce an error, preventing dangling references. This is enforced by Rust's lifetime system.

```rust
fn main() {
    let x = 100;
    let r;
    {
        r = &x;
        println!("Reference inside scope: {}", r);
    } // r is still valid here because x lives long enough
    println!("Reference after inner scope: {}", r);
    // The following would cause a compile error if x did not live long enough:
    // let r;
    // {
    //     let y = 200;
    //     r = &y;
    // } // y is dropped here
    // println!("Dangling reference: {}", r); // Error!
}
```
