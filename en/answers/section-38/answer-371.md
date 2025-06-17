## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Passing owned values to functions  
#### ✅ Answer 371: Passing owned values to functions

In this example, the ownership of a string variable is moved to a function. The function takes ownership, performs an operation, and the original variable can no longer be used in the calling scope. This demonstrates Rust's ownership rules for values passed by value.

```rust
fn print_uppercase(s: String) {
    println!("{}", s.to_uppercase());
}

fn main() {
    let my_string = String::from("hello rust");
    print_uppercase(my_string);
    // The following line will cause a compiler error:
    // println!("{}", my_string);
}
```
