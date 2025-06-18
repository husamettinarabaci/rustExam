## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Understanding Why Self-Referential Structs Are Unsafe by Default
#### ✅ Answer 741: Understanding why self-referential structs are unsafe by default

Self-referential structs contain references to their own fields. If such a struct is moved in memory, the references become invalid, leading to undefined behavior. Rust's ownership and borrowing rules cannot guarantee the safety of self-references after a move.

```rust
struct SelfRef<'a> {
    data: String,
    data_ref: Option<&'a String>,
}

fn main() {
    let mut s = SelfRef { data: String::from("hello"), data_ref: None };
    s.data_ref = Some(&s.data);
    // If s is moved here, s.data_ref would point to invalid memory!
}
```

Because of this, self-referential structs are unsafe by default in Rust.
