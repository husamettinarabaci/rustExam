## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Balancing ergonomics and safety in APIs  
#### ✅ Answer 808: Balancing ergonomics and safety in APIs

Below is an example of an ergonomic and safe API that uses unsafe internally. The user never needs to write an unsafe block.

```rust
pub struct FastVec<'a> {
    data: &'a mut [i32],
}

impl<'a> FastVec<'a> {
    pub fn new(data: &'a mut [i32]) -> Self {
        Self { data }
    }
    pub fn get(&self, idx: usize) -> Option<&i32> {
        if idx < self.data.len() {
            Some(unsafe { self.data.get_unchecked(idx) })
        } else {
            None
        }
    }
}

fn main() {
    let mut arr = [10, 20, 30];
    let v = FastVec::new(&mut arr);
    println!("{:?}", v.get(1));
}
```

The user gets safe Option-based access, while bounds checks are skipped internally for performance.
