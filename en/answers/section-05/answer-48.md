# Answer 48

## 📘 Section: Functions I  
### 🔹 Category: Concurrency Primitives  
#### ✅ Answer 48: Difference between `Mutex` and `RwLock`

**Explanation:**
A `Mutex` allows only one thread to access the data at a time. An `RwLock` allows multiple readers or one writer at a time.

**Example:**
```rust
use std::sync::{Mutex, RwLock};
let m = Mutex::new(5);
let r = RwLock::new(5);
```
Use `RwLock` when reads are frequent and writes are rare; use `Mutex` for exclusive access.
