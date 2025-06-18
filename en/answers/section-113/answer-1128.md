## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: Scaling actors across threads and processes
#### ✅ Answer 1128: Scaling actors across threads and processes

Actors can be run on multiple threads or processes in Rust. For threads, use `Arc` and channels; for processes, use IPC.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

struct MyActor;
impl MyActor {
    fn run(&self) {
        println!("Actor running on thread: {:?}", thread::current().id());
    }
}

let actor = Arc::new(MyActor);
let handles: Vec<_> = (0..4)
    .map(|_| {
        let actor = Arc::clone(&actor);
        thread::spawn(move || {
            actor.run();
        })
    })
    .collect();
for h in handles { h.join().unwrap(); }
```
This example runs the actor on multiple threads.
