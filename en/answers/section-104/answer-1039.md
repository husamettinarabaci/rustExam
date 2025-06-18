## 📘 Section: Actor Model and Message Systems  
### 🔹 Category: Actor Concurrency Model  
#### ✅ Answer 1039: Scaling actors across threads

Actors can be run on multiple threads to increase parallel processing capacity. In Rust, the actix crate allows starting multiple actors and running them in a thread pool. Below is an example of actors running on multiple threads.

```rust
use actix::prelude::*;
use std::time::Duration;

struct Worker;

impl Actor for Worker {
    type Context = Context<Self>;
}

struct Job(u32);
impl Message for Job {
    type Result = ();
}

impl Handler<Job> for Worker {
    type Result = ();
    fn handle(&mut self, msg: Job, _ctx: &mut Context<Self>) {
        println!("Processing job {} on thread {:?}", msg.0, std::thread::current().id());
    }
}

#[actix::main]
async fn main() {
    let workers: Vec<_> = (0..4).map(|_| Worker.start()).collect();
    for (i, worker) in workers.iter().enumerate() {
        worker.do_send(Job(i as u32));
    }
    actix::clock::sleep(Duration::from_millis(100)).await;
}
```
