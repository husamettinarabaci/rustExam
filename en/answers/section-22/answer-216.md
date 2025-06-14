## 📘 Section: Traits I  
### 🔹 Category: Trait Bounds  
#### ✅ Answer 216: Trait bounds in function signatures

Trait bounds restrict generic types to those that implement certain traits. You can use `T: Trait` or a `where` clause.

```rust
fn print_debug<T: std::fmt::Debug>(item: T) {
    println!("{:?}", item);
}

fn print_display<T>(item: T)
where
    T: std::fmt::Display,
{
    println!("{}", item);
}
```
