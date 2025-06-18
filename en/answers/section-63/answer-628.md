## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Marker Traits for Compile-Time Guarantees
#### ✅ Answer 628: Using marker traits for compile-time guarantees

Marker traits are traits without any methods or associated items. They are used to mark types with certain properties, enabling compile-time checks. Examples include `Send` and `Sync` in the standard library.

```rust
trait MyMarker {}

struct Foo;
impl MyMarker for Foo {}

fn assert_marker<T: MyMarker>(_t: T) {}

fn main() {
    let foo = Foo;
    assert_marker(foo); // Compiles only if Foo implements MyMarker
}
```
