## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1039: Aktörleri thread'ler arasında ölçeklendirme

Aktörler, birden fazla thread üzerinde çalıştırılarak sistemin paralel iş kapasitesi artırılabilir. Rust'ta actix crate ile birden fazla aktör başlatıp thread havuzunda çalıştırmak mümkündür. Aşağıda, birden fazla thread'de çalışan aktör örneği verilmiştir.

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
