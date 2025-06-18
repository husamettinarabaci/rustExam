## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: Using async actors with `async-actor`
#### ✅ Answer 1125: Async actors with `async-actor`

The `async-actor` crate allows defining asynchronous actors. Actors process messages asynchronously.

```rust
use async_actor::{Actor, Addr, Context, Handler, Message};

struct EchoActor;

impl Actor for EchoActor {}

struct EchoMsg(String);
impl Message for EchoMsg { type Result = String; }

#[async_trait::async_trait]
impl Handler<EchoMsg> for EchoActor {
    async fn handle(&mut self, msg: EchoMsg, _ctx: &mut Context<Self>) -> String {
        format!("Echo: {}", msg.0)
    }
}

// Usage:
// let addr = EchoActor.start();
// let res = addr.send(EchoMsg("Hello".into())).await;
```
This example shows an async actor processing a message and returning a response.
