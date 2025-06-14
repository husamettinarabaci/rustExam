## 📚 Section: Collections  
### 🔹 Category: VecDeque  
#### ✅ Answer 67: Using VecDeque

**Explanation:**
`VecDeque` is a double-ended queue. You can push and pop from both ends.

```rust
use std::collections::VecDeque;

fn main() {
    let mut d = VecDeque::new();
    d.push_back(1);
    d.push_front(2);
    println!("{:?}", d);
    d.pop_back();
    println!("{:?}", d);
}
```
