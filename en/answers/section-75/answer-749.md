## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Comparing `Pin`-Based APIs to Regular Borrowed References
#### ✅ Answer 749: Comparing `Pin`-based APIs to regular borrowed references

`Pin<&mut T>` is used when a value must not be moved in memory, such as for self-referential types or async tasks. `&mut T` allows moving the value. Pinning provides stronger guarantees.

```rust
use std::pin::Pin;

struct MyType {
    data: String,
}

fn use_mut_ref(x: &mut MyType) {
    x.data.push_str(" world");
}

fn use_pin(x: Pin<&mut MyType>) {
    // x cannot be moved here
    println!("Pinned: {}", x.data);
}

fn main() {
    let mut t = MyType { data: String::from("hello") };
    use_mut_ref(&mut t); // Can move t
    let mut t = Box::pin(t);
    use_pin(Pin::as_mut(&mut t)); // Cannot move t
}
```

Use `Pin` when you need to guarantee that a value will not be moved after being pinned.
