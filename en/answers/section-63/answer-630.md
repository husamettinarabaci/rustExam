## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Combining Traits with Where Clauses for Readability
#### ✅ Answer 630: Combining traits with `where` clauses for readability

The `where` clause in Rust allows you to specify trait bounds in a more readable way, especially when there are multiple bounds or complex generic constraints. This improves code clarity and maintainability.

```rust
fn print_all<T, U>(a: T, b: U)
where
    T: std::fmt::Display + Clone,
    U: std::fmt::Debug,
{
    println!("a: {}", a);
    println!("b: {:?}", b);
}

fn main() {
    print_all(42, "hello");
}
```
