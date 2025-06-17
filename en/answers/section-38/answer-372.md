## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Returning owned values from functions  
#### ✅ Answer 372: Returning owned values from functions

In this example, ownership of a string variable is moved to a function, which processes the string and then returns ownership back to the caller. This allows the caller to continue using the value after the function call.

```rust
fn append_suffix(mut s: String) -> String {
    s.push_str(" - rustacean");
    s
}

fn main() {
    let my_string = String::from("hello");
    let new_string = append_suffix(my_string);
    println!("{}", new_string);
}
```
