## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1034: Aktör yaşam döngüsü gözetimi

Aktör gözetimi (supervision), bir aktörün hata durumunda sistemin kararlılığını korumak için yeniden başlatılması veya farklı bir şekilde ele alınmasıdır. Rust'ta actix crate ile gözetmen aktörler tanımlanabilir. Aşağıda, bir aktörün hata sonrası yeniden başlatılması örneği verilmiştir.

```rust
use actix::prelude::*;

struct Child;

impl Actor for Child {
    type Context = Context<Self>;
}

struct Fail;
impl Message for Fail {
    type Result = ();
}

impl Handler<Fail> for Child {
    type Result = ();
    fn handle(&mut self, _msg: Fail, _ctx: &mut Context<Self>) {
        panic!("Child failed!");
    }
}

struct Supervisor;

impl Supervised for Child {
    fn restarting(&mut self, _ctx: &mut Context<Child>) {
        println!("Child actor is restarting after failure.");
    }
}

impl Actor for Supervisor {
    type Context = Context<Self>;
}

#[actix::main]
async fn main() {
    let child = Supervisor::start(|_| Child);
    child.do_send(Fail);
}
```
