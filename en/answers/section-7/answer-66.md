## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Borrowing with References  
#### ✅ Answer 66: Borrowing with references

In Rust, you can borrow a value by passing a reference to a function. Ownership is not transferred, so the original variable can still be used after the call.

```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let text = String::from("hello");
    print_length(&text); // borrow with reference
    println!("Original: {}", text); // still valid
}
```

Here, `print_length` borrows the `String` via a reference, so `text` remains valid after the function call.
