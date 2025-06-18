## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Sealed Traits and Implementation Restrictions  
#### ✅ Answer 727: Restricting trait implementations with sealed traits

The sealed trait pattern in Rust is used to prevent external crates from implementing a trait, thus restricting implementations to a specific module or crate. This is achieved by making a private trait (the "sealed" trait) a supertrait of the public trait. Only types in the same module can implement the sealed trait, so only they can implement the public trait.

```rust
mod mymod {
    // Private sealed trait
    pub(crate) trait Sealed {}

    // Public trait, only implementable if Sealed is implemented
    pub trait MyTrait: Sealed {
        fn do_something(&self) -> String;
    }

    // Only types in this module can implement Sealed
    pub struct MyType;
    impl Sealed for MyType {}
    impl MyTrait for MyType {
        fn do_something(&self) -> String {
            "Hello from MyType".to_string()
        }
    }
}

// Outside the module, you cannot implement MyTrait for your own types
// because you cannot implement the private Sealed trait.
```
