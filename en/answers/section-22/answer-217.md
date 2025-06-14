## 📘 Section: Traits I  
### 🔹 Category: Multiple Trait Bounds  
#### ✅ Answer 217: Multiple trait bounds

You can specify multiple trait bounds inline or with a `where` clause.

```rust
fn print_all<T: std::fmt::Debug + std::fmt::Display>(item: T) {
    println!("{:?} {}", item, item);
}

fn print_all_where<T>(item: T)
where
    T: std::fmt::Debug + std::fmt::Display,
{
    println!("{:?} {}", item, item);
}
```
