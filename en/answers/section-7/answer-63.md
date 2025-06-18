## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Ownership with Function Parameters  
#### ✅ Answer 63: Ownership with function parameters

When a function takes a parameter by value (not by reference), ownership is transferred. The original variable cannot be used after the function call.

```rust
fn take_ownership(s: String) {
    println!("Received: {}", s);
}

fn main() {
    let msg = String::from("hello");
    take_ownership(msg); // ownership moves here
    // println!("{}", msg); // error: value borrowed here after move
}
```

If you uncomment the line with `msg`, the compiler will report an error because `msg` is no longer valid after being moved.
