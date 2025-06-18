## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Using `dyn Trait` with Multiple Trait Bounds
#### ✅ Answer 734: Using `dyn Trait` with multiple trait bounds

To use a trait object with multiple trait bounds, you can specify them using the `+` syntax (e.g., `dyn TraitA + TraitB`). This allows you to accept objects that implement all specified traits. Note that only object-safe traits can be used as trait objects.

```rust
trait TraitA {
    fn a(&self);
}
trait TraitB {
    fn b(&self);
}

struct MyStruct;
impl TraitA for MyStruct {
    fn a(&self) { println!("TraitA::a"); }
}
impl TraitB for MyStruct {
    fn b(&self) { println!("TraitB::b"); }
}

fn use_traits(obj: &dyn TraitA + TraitB) {
    obj.a();
    obj.b();
}

fn main() {
    let s = MyStruct;
    use_traits(&s);
}
```
