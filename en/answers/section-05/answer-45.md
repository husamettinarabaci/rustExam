# Answer 45

## 📘 Section: Functions I  
### 🔹 Category: Functions Returning Unit  
#### ✅ Answer 45: Function returning nothing (`()`)

**Explanation:**
A function that returns nothing in Rust has the unit type `()`. This is common for functions that perform actions but do not return a value.

**Example:**
```rust
fn log_message(msg: &str) {
    println!("{}", msg);
}

fn main() {
    log_message("This function returns nothing!");
}
```
Here, `log_message` returns `()`, the unit type, implicitly.
