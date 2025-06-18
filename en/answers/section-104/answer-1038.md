## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1038: Error handling in actor systems

Error handling is critical in actor-based systems to ensure stability and reliability. In Rust, actors can return `Result` from message handlers to propagate errors. Below is an example of an actor with error handling.

```rust
use actix::prelude::*;

struct FailableActor;

impl Actor for FailableActor {
    type Context = Context<Self>;
}

struct Divide(i32, i32);
impl Message for Divide {
    type Result = Result<i32, String>;
}

impl Handler<Divide> for FailableActor {
    type Result = Result<i32, String>;
    fn handle(&mut self, msg: Divide, _ctx: &mut Context<Self>) -> Self::Result {
        if msg.1 == 0 {
            Err("Division by zero".into())
        } else {
            Ok(msg.0 / msg.1)
        }
    }
}

#[actix::main]
async fn main() {
    let addr = FailableActor.start();
    match addr.send(Divide(10, 0)).await.unwrap() {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
}
```
