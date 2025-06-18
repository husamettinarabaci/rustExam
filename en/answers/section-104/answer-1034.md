## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1034: Supervising actor lifecycles

Supervision in the actor model ensures system stability by restarting or handling actors after failures. In Rust, the actix crate allows defining supervisor actors. Below is an example where an actor is restarted after a failure.

```rust
use actix::prelude::*;

struct Child;

impl Actor for Child {
    type Context = Context<Self>;
}

struct Fail;
impl Message for Fail {
    type Result = ();
}

impl Handler<Fail> for Child {
    type Result = ();
    fn handle(&mut self, _msg: Fail, _ctx: &mut Context<Self>) {
        panic!("Child failed!");
    }
}

struct Supervisor;

impl Supervised for Child {
    fn restarting(&mut self, _ctx: &mut Context<Child>) {
        println!("Child actor is restarting after failure.");
    }
}

impl Actor for Supervisor {
    type Context = Context<Self>;
}

#[actix::main]
async fn main() {
    let child = Supervisor::start(|_| Child);
    child.do_send(Fail);
}
```
