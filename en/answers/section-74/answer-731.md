## 📘 Section: Trait Objects and VTable Mechanics  
### 🔹 Category: Trait Objects and Dynamic Dispatch  
#### ✅ Answer 731: Creating and using trait objects with `&dyn Trait` and `Box<dyn Trait>`

Trait objects allow for dynamic dispatch in Rust. By using `&dyn Trait` or `Box<dyn Trait>`, you can call trait methods on different types at runtime. `&dyn Trait` is a reference, while `Box<dyn Trait>` is a heap-allocated trait object.

```rust
trait Greet {
    fn greet(&self) -> String;
}

struct English;
struct Turkish;

impl Greet for English {
    fn greet(&self) -> String {
        "Hello!".to_string()
    }
}

impl Greet for Turkish {
    fn greet(&self) -> String {
        "Merhaba!".to_string()
    }
}

fn main() {
    let eng = English;
    let tur = Turkish;

    // Reference trait object
    let greeters: Vec<&dyn Greet> = vec![&eng, &tur];
    for g in greeters {
        println!("{}", g.greet());
    }

    // Boxed trait object
    let boxed: Vec<Box<dyn Greet>> = vec![Box::new(English), Box::new(Turkish)];
    for g in boxed {
        println!("{}", g.greet());
    }
}
```
