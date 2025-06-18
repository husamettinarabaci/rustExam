## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Using multiple channels in select loops  
#### ✅ Answer 1109: Using multiple channels in select loops

This solution uses the `select!` macro to receive from two channels. The loop continues until both channels are closed, processing messages as they arrive from either channel.

```rust
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    thread::spawn(move || {
        tx1.send("First channel").unwrap();
        thread::sleep(Duration::from_millis(50));
    });
    thread::spawn(move || {
        tx2.send("Second channel").unwrap();
    });

    let mut closed1 = false;
    let mut closed2 = false;
    while !(closed1 && closed2) {
        select! {
            recv(rx1) -> msg => match msg {
                Ok(val) => println!("rx1: {}", val),
                Err(_) => closed1 = true,
            },
            recv(rx2) -> msg => match msg {
                Ok(val) => println!("rx2: {}", val),
                Err(_) => closed2 = true,
            },
        }
    }
    println!("All channels closed.");
}
```
> Note: The `select!` macro requires the `crossbeam` crate.
