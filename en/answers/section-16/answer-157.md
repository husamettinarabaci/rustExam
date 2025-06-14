## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: Higher-Ranked Trait Bounds  
#### ✅ Answer 157: Using higher-ranked trait bounds (HRTBs)

Higher-ranked trait bounds allow you to specify that a function or closure can accept references with any lifetime. This is useful for writing flexible APIs.

```rust
fn call_with_str<F>(f: F)
where
    F: for<'a> Fn(&'a str),
{
    f("hello");
}

call_with_str(|s| println!("{}", s));
```
