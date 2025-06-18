## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Conflict Resolution in Multiple Trait Impls
#### ✅ Answer 626: Conflict resolution in multiple trait impls

When a type implements multiple traits with methods of the same name, you can disambiguate which method to call using fully qualified syntax. Rust does not allow overlapping trait implementations for the same type and trait combination, but you can resolve method name conflicts at the call site.

```rust
trait A {
    fn foo(&self) {
        println!("A::foo");
    }
}
trait B {
    fn foo(&self) {
        println!("B::foo");
    }
}

struct S;

impl A for S {}
impl B for S {}

fn main() {
    let s = S;
    A::foo(&s); // Calls A's foo
    B::foo(&s); // Calls B's foo
}
```
