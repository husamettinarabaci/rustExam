## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Returning Ownership  
#### ✅ Answer 64: Returning ownership from a function

A function can return ownership of a value by returning it. The caller receives ownership and can use the value.

```rust
fn give_ownership() -> String {
    let s = String::from("hello");
    s // ownership moves to the caller
}

fn main() {
    let s1 = give_ownership();
    println!("{}", s1); // works fine
}
```

Here, `give_ownership` returns a `String`, transferring ownership to the caller, who can then use it.
