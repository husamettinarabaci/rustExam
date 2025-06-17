## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Trait coherence and the orphan rule  
#### ✅ Answer 320: What are trait coherence and the orphan rule?

Trait coherence in Rust is a set of rules that prevent conflicting trait implementations. The orphan rule states that you can only implement a trait for a type if either the trait or the type is defined in your crate. This prevents conflicts and ensures predictable behavior.

Here are two examples:

1. **Implementing your own trait for your own type (allowed):**

```rust
trait MyTrait {
    fn hello(&self);
}

struct MyType;

impl MyTrait for MyType {
    fn hello(&self) {
        println!("Hello from MyType!");
    }
}
```

2. **Attempting to implement an external trait for an external type (not allowed):**

```rust
// Suppose both the Display trait and Vec<T> type come from the std library.
// The following implementation is rejected by the compiler:

// impl std::fmt::Display for Vec<i32> {
//     fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
//         write!(f, "Vec: {:?}", self)
//     }
// }
// Error: E0117 - only traits defined in the current crate can be implemented for types defined outside of the crate
```

This rule prevents multiple crates from providing conflicting implementations for the same trait-type pair.
