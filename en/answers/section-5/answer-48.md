# Answer 48

## 📘 Section: Functions I  
### 🔹 Category: Function Parameters  
#### ✅ Answer 48: Function with default arguments (simulate)

Rust does not support default arguments directly, but you can simulate them using `Option` parameters and pattern matching.

```rust
fn print_number(num: Option<i32>) {
    match num {
        Some(n) => println!("Number: {}", n),
        None => println!("Default is 42"),
    }
}

fn main() {
    print_number(Some(7));
    print_number(None);
}
```
