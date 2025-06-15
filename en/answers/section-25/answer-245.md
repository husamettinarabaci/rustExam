## 📘 Section: Closures and Ownership
### 🔹 Category: Lifetime of Closures and Variables
#### ✅ Answer 245: Lifetime of closures and variables

In Rust, a closure cannot outlive the variables it captures by reference. If a closure tries to use a reference to a local variable after that variable has gone out of scope, the compiler will produce a lifetime error.

Example (this will not compile):

```rust
fn main() {
    let closure;
    {
        let x = 10;
        closure = || println!("x = {}", x); // closure captures x by reference
    } // x is dropped here
    // closure(); // ERROR: x does not live long enough
}
```

**Error explanation:**
The closure tries to use `x` after it has been dropped, which is not allowed.

**How to fix:**
Capture the variable by value using the `move` keyword so the closure owns its data:

```rust
fn main() {
    let closure;
    {
        let x = 10;
        closure = move || println!("x = {}", x); // closure captures x by value
    }
    closure(); // OK: x is moved into the closure
}
```

By using `move`, the closure takes ownership of `x`, so it can be called after `x`'s original scope ends.
