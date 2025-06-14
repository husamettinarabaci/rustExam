## 📘 Section: Functions I  
### 🔹 Category: Reference Counting  
#### ✅ Answer 47: Difference between `Arc` and `Rc`

**Explanation:**
`Rc` (Reference Counted) is for multiple ownership in single-threaded contexts. `Arc` (Atomic Reference Counted) is for multiple ownership across threads.

**Example:**
```rust
use std::rc::Rc;
let a = Rc::new(5);
let b = Rc::clone(&a);

use std::sync::Arc;
let x = Arc::new(5);
let y = Arc::clone(&x);
```
Use `Rc` for single-threaded, `Arc` for multi-threaded scenarios.
