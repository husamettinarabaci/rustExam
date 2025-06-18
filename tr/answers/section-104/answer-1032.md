## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1032: `actix` crate ile aktör implementasyonu

`actix`, Rust'ta aktör tabanlı eşzamanlılık için yaygın olarak kullanılan bir kütüphanedir. Her aktör kendi durumunu yönetir ve mesajlar ile iletişim kurar. Aşağıda, bir aktörün tanımlanması ve ona mesaj gönderilmesi örneği verilmiştir.

```rust
use actix::prelude::*;

struct MyActor;

impl Actor for MyActor {
    type Context = Context<Self>;
}

struct Ping;

impl Message for Ping {
    type Result = ();
}

impl Handler<Ping> for MyActor {
    type Result = ();
    fn handle(&mut self, _msg: Ping, _ctx: &mut Context<Self>) {
        println!("Ping received!");
    }
}

#[actix::main]
async fn main() {
    let addr = MyActor.start();
    addr.do_send(Ping);
}
```
