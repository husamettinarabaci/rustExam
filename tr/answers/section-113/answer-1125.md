## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Async aktörler ile `async-actor` kullanımı
#### ✅ Cevap 1125: `async-actor` ile async aktörler

`async-actor` kütüphanesi ile asenkron aktörler tanımlanabilir. Aktörler mesajları asenkron olarak işler.

```rust
use async_actor::{Actor, Addr, Context, Handler, Message};

struct EchoActor;

impl Actor for EchoActor {}

struct EchoMsg(String);
impl Message for EchoMsg { type Result = String; }

#[async_trait::async_trait]
impl Handler<EchoMsg> for EchoActor {
    async fn handle(&mut self, msg: EchoMsg, _ctx: &mut Context<Self>) -> String {
        format!("Echo: {}", msg.0)
    }
}

// Kullanım:
// let addr = EchoActor.start();
// let res = addr.send(EchoMsg("Merhaba".into())).await;
```
Bu örnekte, aktör bir mesajı asenkron olarak işler ve yanıt döner.
