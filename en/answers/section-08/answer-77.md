## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime in Method Receivers  
#### ✅ Answer 77: Lifetime in method receivers

When a struct contains a reference, its methods that use the reference must also specify the lifetime. Here, the method `len` borrows `self` with the correct lifetime annotation.

```rust
struct TextHolder<'a> {
    text: &'a str,
}

impl<'a> TextHolder<'a> {
    fn len(&self) -> usize {
        self.text.len()
    }
}

fn main() {
    let s = String::from("lifetime method");
    let holder = TextHolder { text: &s };
    println!("Length: {}", holder.len());
}
```
