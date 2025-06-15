## 📘 Section: Enums I  
### 🔹 Category: Enum Methods with `impl`  
#### ✅ Answer 105: Enum methods with `impl`

This example shows how to define methods for an enum using an `impl` block. The method can be called on any instance of the enum.

```rust
enum Light {
    On,
    Off,
}

impl Light {
    fn status(&self) -> &str {
        match self {
            Light::On => "The light is on.",
            Light::Off => "The light is off.",
        }
    }
}

fn main() {
    let lamp = Light::On;
    println!("{}", lamp.status());
}
```
