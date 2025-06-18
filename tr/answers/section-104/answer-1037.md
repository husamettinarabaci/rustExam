## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1037: Mesaj serileştirme ve deserileştirme

Aktörler arasında farklı süreçler veya makineler arasında mesaj iletimi için serileştirme ve deserileştirme gereklidir. Rust'ta `serde` ve `serde_json` ile mesajlar JSON formatında serileştirilebilir. Aşağıda, JSON mesajı alan bir aktör örneği verilmiştir.

```rust
use actix::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct MyMsg {
    text: String,
}

struct JsonActor;

impl Actor for JsonActor {
    type Context = Context<Self>;
}

struct RawJson(String);
impl Message for RawJson {
    type Result = ();
}

impl Handler<RawJson> for JsonActor {
    type Result = ();
    fn handle(&mut self, msg: RawJson, _ctx: &mut Context<Self>) {
        let parsed: MyMsg = serde_json::from_str(&msg.0).unwrap();
        println!("Received: {}", parsed.text);
    }
}

#[actix::main]
async fn main() {
    let addr = JsonActor.start();
    let json = serde_json::to_string(&MyMsg { text: "Hello JSON!".into() }).unwrap();
    addr.do_send(RawJson(json));
}
```
