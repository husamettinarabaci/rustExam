## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1033: Designing message protocols for actors

A message protocol defines which types of messages an actor can receive and process. In Rust, this is achieved by defining different message types and corresponding handlers. Below is an example of an actor that can handle two different message types.

```rust
use actix::prelude::*;

struct MyActor;

impl Actor for MyActor {
    type Context = Context<Self>;
}

struct Greet(String);
struct Add(i32, i32);

impl Message for Greet {
    type Result = ();
}
impl Message for Add {
    type Result = i32;
}

impl Handler<Greet> for MyActor {
    type Result = ();
    fn handle(&mut self, msg: Greet, _ctx: &mut Context<Self>) {
        println!("Hello, {}!", msg.0);
    }
}

impl Handler<Add> for MyActor {
    type Result = i32;
    fn handle(&mut self, msg: Add, _ctx: &mut Context<Self>) -> i32 {
        msg.0 + msg.1
    }
}

#[actix::main]
async fn main() {
    let addr = MyActor.start();
    addr.do_send(Greet("Rustacean".into()));
    let sum = addr.send(Add(2, 3)).await.unwrap();
    println!("Sum: {}", sum);
}
```
