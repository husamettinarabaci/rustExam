## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Explicitly Managing Thread Lifecycle  
#### ✅ Answer 1169: Explicitly managing thread lifecycle

This example simulates thread lifecycle steps such as starting, stopping, and restarting. The state of the thread is printed at each step.

```rust
use std::thread;
use std::time::Duration;

enum ThreadState {
    Started,
    Stopped,
    Restarted,
}

fn main() {
    let mut state = ThreadState::Started;
    println!("Thread state: Started");
    let handle = thread::spawn(|| {
        thread::sleep(Duration::from_millis(200));
        println!("Thread is running");
    });
    handle.join().unwrap();
    state = ThreadState::Stopped;
    println!("Thread state: Stopped");
    // Simulate restart
    state = ThreadState::Restarted;
    println!("Thread state: Restarted");
    let handle2 = thread::spawn(|| {
        thread::sleep(Duration::from_millis(100));
        println!("Thread is running again");
    });
    handle2.join().unwrap();
    println!("Thread lifecycle completed.");
}
```
