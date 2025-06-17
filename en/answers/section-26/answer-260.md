## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Ownership Errors and Debugging  
#### ✅ Answer 260: Debugging common ownership-related compile errors

Rust enforces strict ownership and borrowing rules to prevent data races and undefined behavior. In the example below, ownership of a variable is moved to a function, and then the variable is used again, causing a "value borrowed here after move" error. The error occurs because Rust prevents use-after-move to ensure memory safety.

**Incorrect Code:**
```rust
fn main() {
    let s = String::from("hello");
    use_string(s); // ownership is moved here
    println!("{}", s); // ERROR: s is no longer valid
}

fn use_string(str: String) {
    println!("Using: {}", str);
}
```

**Corrected Code (Borrow by Reference):**
```rust
fn main() {
    let s = String::from("hello");
    use_string(&s); // borrow by reference
    println!("{}", s); // s is still valid
}

fn use_string(str: &String) {
    println!("Using: {}", str);
}
```

By borrowing with a reference instead of moving ownership, the variable can be used again after the function call.
