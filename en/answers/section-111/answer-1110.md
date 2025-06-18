## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Diagnosing and fixing channel deadlocks  
#### ✅ Answer 1110: Diagnosing and fixing channel deadlocks

Below is an example where two threads wait for each other's message, causing a deadlock, followed by a solution that avoids the deadlock.

```rust
// Deadlock example:
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    let handle1 = thread::spawn(move || {
        tx1.send("A").unwrap();
        let _ = rx2.recv(); // Deadlock here
    });
    let handle2 = thread::spawn(move || {
        tx2.send("B").unwrap();
        let _ = rx1.recv(); // Deadlock here
    });

    handle1.join().unwrap();
    handle2.join().unwrap();
}

// Solution: Perform all sends before starting receives to avoid deadlock.
```

The deadlock occurs because both threads are waiting for a message from each other. To fix this, perform all sends before any receives.
