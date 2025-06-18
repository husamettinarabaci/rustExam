## 📘 Bölüm: Rust'ta Aktör Frameworkleri  
### 🔹 Kategori: Aktör Frameworkleri  
#### ✅ Cevap 1122: Actix ile aktör implementasyonu

Actix ile bir aktör ve mesaj işleme örneği:

```rust
use actix::prelude::*;

struct HelloActor;
impl Actor for HelloActor {
    type Context = Context<Self>;
}

struct SayHello;
impl Message for SayHello {
    type Result = ();
}

impl Handler<SayHello> for HelloActor {
    type Result = ();
    fn handle(&mut self, _msg: SayHello, _ctx: &mut Context<Self>) {
        println!("Merhaba, Actix aktörü!");
    }
}

fn main() {
    let system = System::new();
    let addr = HelloActor.start();
    addr.do_send(SayHello);
    system.run().unwrap();
}
```
