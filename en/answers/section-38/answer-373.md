## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Borrowing values immutably in parameters  
#### ✅ Answer 373: Borrowing values immutably in parameters

In this example, a string variable is passed to a function as an immutable reference (`&`). The function calculates and prints the string's length. Since ownership is not transferred, the original variable can still be used after the function call.

```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let my_string = String::from("hello rust");
    print_length(&my_string);
    println!("Original: {}", my_string);
}
```
