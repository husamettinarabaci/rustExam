## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Foreign Types and Local Trait Implementations  
#### ✅ Answer 729: Implementing traits for foreign types in local modules

The orphan rule in Rust states that you can only implement a trait for a type if either the trait or the type is local to your crate. This prevents conflicts and ensures coherence. You can implement your own trait for a foreign type, but you cannot implement a foreign trait for a foreign type.

```rust
// Suppose Vec<T> is a foreign type (from std)
trait MyTrait {
    fn describe(&self) -> String;
}

// Allowed: implementing a local trait for a foreign type
impl<T> MyTrait for Vec<T> {
    fn describe(&self) -> String {
        format!("A Vec with {} elements", self.len())
    }
}

// Not allowed: implementing a foreign trait for a foreign type
// impl Display for Vec<T> { ... } // ERROR: both are foreign
```

This restriction is enforced by the compiler to avoid conflicting implementations across crates.
