## 📘 Section: Embedded OS and RTOS Development
### 🔹 Category: Implementing Inter-Task Communication
#### ✅ Answer 923: Implementing inter-task communication

Inter-task communication (ITC) allows tasks to exchange data and synchronize. Common mechanisms include message queues, channels, and shared memory. In Rust, the `heapless` crate provides lock-free queues suitable for embedded systems. Example using `heapless::spsc::Queue`:

```rust
use heapless::spsc::Queue;

fn main() {
    let mut queue: Queue<u8, 4> = Queue::new();
    let (mut prod, mut cons) = queue.split();
    prod.enqueue(42).unwrap();
    let val = cons.dequeue().unwrap();
    println!("Received: {}", val);
}
```

This enables safe, efficient communication between tasks without dynamic allocation.
