## 📘 Section: Actor Frameworks in Rust  
### 🔹 Category: Actor Frameworks  
#### ✅ Answer 1123: Message handling and mailbox design

In actors, each message arrives in a mailbox and is processed sequentially. This ensures concurrency safety and data integrity. Below is an Actix example where messages are handled in order:

```rust
use actix::prelude::*;

struct CounterActor { count: usize }
impl Actor for CounterActor {
    type Context = Context<Self>;
}

struct Increment;
impl Message for Increment { type Result = (); }

impl Handler<Increment> for CounterActor {
    type Result = ();
    fn handle(&mut self, _msg: Increment, _ctx: &mut Context<Self>) {
        self.count += 1;
        println!("Count: {}", self.count);
    }
}

fn main() {
    let system = System::new();
    let addr = CounterActor { count: 0 }.start();
    for _ in 0..5 { addr.do_send(Increment); }
    system.run().unwrap();
}
```
