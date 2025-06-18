## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1035: `async-actor` ve diğer kütüphaneler

Rust'ta `async-actor`, async/await ile aktör modeli uygulamak için kullanılan bir kütüphanedir. Ayrıca `riker`, `xactor` gibi alternatifler de vardır. Aşağıda, `async-actor` ile basit bir aktör ve mesaj gönderimi örneği verilmiştir.

```rust
use async_actor::{Actor, Addr, Context, Handler, Message};
use tokio::runtime::Runtime;

struct MyActor;

struct Ping;
impl Message for Ping {}

#[async_trait::async_trait]
impl Handler<Ping> for MyActor {
    async fn handle(&mut self, _msg: Ping, _ctx: &mut Context<Self>) {
        println!("Ping received (async-actor)!");
    }
}

#[tokio::main]
async fn main() {
    let addr = Addr::new(MyActor).start();
    addr.send(Ping).await.unwrap();
}
```
