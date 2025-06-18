## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktör gözetimi ve yeniden başlatma
#### ✅ Cevap 1124: Aktör gözetimi ve yeniden başlatma

Aktör gözetimi, bir aktörün hata durumunda üst (supervisor) aktör tarafından izlenmesi ve gerektiğinde yeniden başlatılmasıdır. Rust'ta popüler aktör frameworkleri (ör. Actix) gözetim stratejileri sunar. Bir aktör hata verdiğinde, supervisor aktör onu yeniden başlatabilir.

```rust
use actix::prelude::*;

struct MyActor;
impl Actor for MyActor {
    type Context = Context<Self>;
}

impl Supervised for MyActor {
    fn restarting(&mut self, _ctx: &mut Context<MyActor>) {
        println!("Actor is restarting!");
    }
}

fn main() {
    let system = System::new();
    let _addr = MyActor.start();
    system.run().unwrap();
}
```
Bu örnekte, `Supervised` trait'i ile aktör hata aldığında `restarting` fonksiyonu çağrılır ve aktör yeniden başlatılır.
