## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Trait Coherence Across Crates and Modules  
#### ✅ Answer 730: Understanding trait coherence across crates and modules

Trait coherence in Rust means that for any type and trait, there is at most one implementation in the entire program. The compiler enforces this rule (the coherence or orphan rule) to prevent conflicting implementations and ensure type safety across crates and modules.

```rust
// In crate A
pub trait MyTrait {}

// In crate B
use crate_a::MyTrait;
pub struct MyType;
impl MyTrait for MyType {} // OK

// In crate C, you cannot implement MyTrait for MyType again
// impl MyTrait for MyType {} // ERROR: conflicting implementation
```

This rule is crucial for soundness, as it prevents ambiguity and ensures that trait method calls are always unambiguous and safe.
