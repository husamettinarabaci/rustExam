## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1036: Actor state management and interior mutability

Actors manage their own state, which is not accessible from outside. In Rust, interior mutability (e.g., `Cell`, `RefCell`) can be used to update state within an actor. Below is an example of an actor that updates a counter state using `RefCell`.

```rust
use actix::prelude::*;
use std::cell::RefCell;

struct CounterActor {
    count: RefCell<i32>,
}

impl Actor for CounterActor {
    type Context = Context<Self>;
}

struct Inc;
impl Message for Inc {
    type Result = i32;
}

impl Handler<Inc> for CounterActor {
    type Result = i32;
    fn handle(&mut self, _msg: Inc, _ctx: &mut Context<Self>) -> i32 {
        let mut count = self.count.borrow_mut();
        *count += 1;
        *count
    }
}

#[actix::main]
async fn main() {
    let addr = CounterActor { count: RefCell::new(0) }.start();
    let new_count = addr.send(Inc).await.unwrap();
    println!("New count: {}", new_count);
}
```
