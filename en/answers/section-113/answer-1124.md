## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: Actor supervision and restarts
#### ✅ Answer 1124: Actor supervision and restarts

Actor supervision means that a supervisor actor monitors child actors and can restart them if they fail. In Rust, frameworks like Actix provide supervision strategies. When an actor fails, the supervisor can restart it automatically.

```rust
use actix::prelude::*;

struct MyActor;
impl Actor for MyActor {
    type Context = Context<Self>;
}

impl Supervised for MyActor {
    fn restarting(&mut self, _ctx: &mut Context<MyActor>) {
        println!("Actor is restarting!");
    }
}

fn main() {
    let system = System::new();
    let _addr = MyActor.start();
    system.run().unwrap();
}
```
Here, the `Supervised` trait allows the actor to be restarted by the supervisor when it fails.
