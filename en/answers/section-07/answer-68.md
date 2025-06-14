## 📚 Section: Collections  
### 🔹 Category: BinaryHeap  
#### ✅ Answer 68: Using BinaryHeap

**Explanation:**
A `BinaryHeap` is a priority queue. Largest values come out first by default.

```rust
use std::collections::BinaryHeap;

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(4);
    heap.push(1);
    heap.push(7);
    while let Some(x) = heap.pop() {
        println!("{}", x);
    }
}
```
