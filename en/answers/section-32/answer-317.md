## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Using `impl Trait` in Function Return Types  
#### ✅ Answer 317: Using `impl Trait` in function return types

This example demonstrates returning a type that implements a trait using `impl Trait` in the function return type. This is a concise and type-safe way to return trait implementors.

```rust
trait Speak {
    fn speak(&self) -> String;
}

struct Dog;

impl Speak for Dog {
    fn speak(&self) -> String {
        String::from("Woof woof!")
    }
}

fn create_speaker() -> impl Speak {
    Dog
}

fn main() {
    let speaker = create_speaker();
    println!("{}", speaker.speak());
}
```
