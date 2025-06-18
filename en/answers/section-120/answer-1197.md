## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Load balancing and work stealing  
#### ✅ Answer 1197: Load balancing and work stealing

Load balancing aims to distribute tasks evenly among threads or workers. Work stealing allows idle threads to "steal" tasks from others.

**Load balancing logic:**
- Tasks are assigned to threads in order or randomly.

**Work stealing logic:**
- Each thread has its own queue; idle threads take tasks from others' queues.

**Example (logic):**
```rust
// Load balancing: Distribute tasks in a thread pool in order.
// Work stealing: Libraries like Rayon use work stealing algorithms.
```

These techniques are used in parallel algorithms, big data processing, and high-performance applications.
