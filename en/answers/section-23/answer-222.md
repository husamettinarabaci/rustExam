## 📘 Section: Generics II  
### 🔹 Category: Generic Trait Bounds  
#### ✅ Answer 222: Generic trait bounds

Trait bounds restrict generic types to those that implement certain traits. You can use inline or `where` clause syntax.

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
