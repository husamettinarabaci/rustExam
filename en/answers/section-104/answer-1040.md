## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1040: Testing actor-based concurrency

Tests in actor-based systems are necessary to ensure messages are processed correctly and the system behaves as expected. In Rust, actix allows writing unit tests to verify that an actor processes messages and returns the correct result.

```rust
use actix::prelude::*;

struct Echo;

impl Actor for Echo {
    type Context = Context<Self>;
}

struct Msg(String);
impl Message for Msg {
    type Result = String;
}

impl Handler<Msg> for Echo {
    type Result = String;
    fn handle(&mut self, msg: Msg, _ctx: &mut Context<Self>) -> String {
        msg.0
    }
}

#[actix_rt::test]
async fn test_echo_actor() {
    let addr = Echo.start();
    let res = addr.send(Msg("hello".into())).await.unwrap();
    assert_eq!(res, "hello");
}
```
