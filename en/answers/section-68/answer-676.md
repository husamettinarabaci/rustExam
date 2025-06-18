## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Handling panics gracefully in applications
#### ✅ Answer 676: Handling panics gracefully in applications

You can use `std::panic::catch_unwind` to catch panics and prevent your application from crashing unexpectedly.

```rust
use std::panic;

fn main() {
    let result = panic::catch_unwind(|| {
        panic!("Something went wrong!");
    });

    match result {
        Ok(_) => println!("No panic occurred."),
        Err(e) => println!("Panic caught: {:?}", e),
    }
}
```
