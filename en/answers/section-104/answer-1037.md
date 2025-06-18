## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1037: Message serialization and deserialization

Serialization and deserialization are essential for sending messages between actors across processes or machines. In Rust, `serde` and `serde_json` can be used to serialize messages as JSON. Below is an example of an actor receiving a JSON message.

```rust
use actix::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct MyMsg {
    text: String,
}

struct JsonActor;

impl Actor for JsonActor {
    type Context = Context<Self>;
}

struct RawJson(String);
impl Message for RawJson {
    type Result = ();
}

impl Handler<RawJson> for JsonActor {
    type Result = ();
    fn handle(&mut self, msg: RawJson, _ctx: &mut Context<Self>) {
        let parsed: MyMsg = serde_json::from_str(&msg.0).unwrap();
        println!("Received: {}", parsed.text);
    }
}

#[actix::main]
async fn main() {
    let addr = JsonActor.start();
    let json = serde_json::to_string(&MyMsg { text: "Hello JSON!".into() }).unwrap();
    addr.do_send(RawJson(json));
}
```
