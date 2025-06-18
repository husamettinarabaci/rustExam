## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Demonstrating Object Safety Rules and Violations
#### ✅ Answer 739: Demonstrating object safety rules and their violations

A trait is object-safe if all its methods can be called on a trait object. Traits with generic methods or methods using `Self` in their signatures are not object-safe.

```rust
// Not object-safe: generic method
trait NotObjectSafe {
    fn foo<T>(&self, t: T);
}

// This will not compile:
// let obj: &dyn NotObjectSafe;

// Object-safe version:
trait ObjectSafe {
    fn foo(&self);
}

struct S;
impl ObjectSafe for S {
    fn foo(&self) { println!("Object safe!"); }
}

fn main() {
    let s = S;
    let obj: &dyn ObjectSafe = &s;
    obj.foo();
}
```

The compiler will reject trait objects for traits that are not object-safe.
