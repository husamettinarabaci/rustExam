## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1040: Aktör tabanlı eşzamanlılığı test etme

Aktör tabanlı sistemlerde testler, mesajların doğru şekilde işlendiğini ve sistemin beklenen şekilde davrandığını doğrulamak için gereklidir. Rust'ta actix ile bir aktörün mesajı işleyip doğru sonucu döndürdüğünü test eden birim testi aşağıda verilmiştir.

```rust
use actix::prelude::*;

struct Echo;

impl Actor for Echo {
    type Context = Context<Self>;
}

struct Msg(String);
impl Message for Msg {
    type Result = String;
}

impl Handler<Msg> for Echo {
    type Result = String;
    fn handle(&mut self, msg: Msg, _ctx: &mut Context<Self>) -> String {
        msg.0
    }
}

#[actix_rt::test]
async fn test_echo_actor() {
    let addr = Echo.start();
    let res = addr.send(Msg("hello".into())).await.unwrap();
    assert_eq!(res, "hello");
}
```
