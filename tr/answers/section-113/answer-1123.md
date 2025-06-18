## 📘 Bölüm: Rust'ta Aktör Frameworkleri  
### 🔹 Kategori: Aktör Frameworkleri  
#### ✅ Cevap 1123: Mesaj işleme ve posta kutusu tasarımı

Aktörlerde her mesaj bir posta kutusuna (mailbox) gelir ve sırayla işlenir. Bu, eşzamanlılık ve veri bütünlüğü sağlar. Aşağıda, Actix ile mesajların sırayla işlendiği bir örnek verilmiştir:

```rust
use actix::prelude::*;

struct CounterActor { count: usize }
impl Actor for CounterActor {
    type Context = Context<Self>;
}

struct Increment;
impl Message for Increment { type Result = (); }

impl Handler<Increment> for CounterActor {
    type Result = ();
    fn handle(&mut self, _msg: Increment, _ctx: &mut Context<Self>) {
        self.count += 1;
        println!("Sayaç: {}", self.count);
    }
}

fn main() {
    let system = System::new();
    let addr = CounterActor { count: 0 }.start();
    for _ in 0..5 { addr.do_send(Increment); }
    system.run().unwrap();
}
```
