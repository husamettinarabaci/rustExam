## 📘 Section: Structs II  
### 🔹 Category: Method returning self  
#### ✅ Answer 96: Method returning self

A method can return `Self` to create a new instance of the struct. Here, we define a `Multiplier` struct and a `double` method that returns a new `Multiplier` with its value doubled.

```rust
struct Multiplier {
    value: i32,
}

impl Multiplier {
    fn double(&self) -> Self {
        Self { value: self.value * 2 }
    }
}

fn main() {
    let m = Multiplier { value: 5 };
    let doubled = m.double();
    println!("Original: {}, Doubled: {}", m.value, doubled.value);
}
```
