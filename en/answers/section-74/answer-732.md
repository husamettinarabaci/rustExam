## 📘 Section: Trait Objects and VTable Mechanics  
### 🔹 Category: Trait Objects and Memory Layout  
#### ✅ Answer 732: Understanding the memory layout of a fat pointer (data + vtable)

A fat pointer in Rust, such as `&dyn Trait` or `Box<dyn Trait>`, consists of two pointers: one to the data and one to the vtable for dynamic dispatch. This is different from a reference to a concrete type, which is just a single pointer.

```rust
use std::mem::size_of;

trait MyTrait {
    fn foo(&self);
}

struct MyStruct;
impl MyTrait for MyStruct {
    fn foo(&self) {}
}

fn main() {
    let s = MyStruct;
    let trait_ref: &dyn MyTrait = &s;
    println!("Size of &MyStruct: {}", size_of::<&MyStruct>());
    println!("Size of &dyn MyTrait: {}", size_of::<&dyn MyTrait>());
}
```

On most platforms, `&MyStruct` is 8 bytes (just a pointer), while `&dyn MyTrait` is 16 bytes (data pointer + vtable pointer).
