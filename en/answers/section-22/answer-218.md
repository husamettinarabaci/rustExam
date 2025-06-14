## 📘 Section: Traits I  
### 🔹 Category: Where Clauses  
#### ✅ Answer 218: Using `where` clauses

A `where` clause is used to specify complex trait bounds in a readable way, especially when there are multiple bounds.

```rust
fn process<T, U>(t: T, u: U)
where
    T: std::fmt::Debug + Clone,
    U: std::fmt::Display + Default,
{
    println!("{:?} {}", t.clone(), u);
}
```
