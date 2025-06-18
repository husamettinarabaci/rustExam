## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1036: Aktör durum yönetimi ve içsel değiştirilebilirlik

Aktörler, kendi durumlarını dışarıdan erişime kapalı şekilde yönetir. Rust'ta, aktörün durumunu güncellemek için içsel değiştirilebilirlik (ör. `Cell`, `RefCell`) kullanılabilir. Aşağıda, bir sayaç durumunu `RefCell` ile güncelleyen bir aktör örneği verilmiştir.

```rust
use actix::prelude::*;
use std::cell::RefCell;

struct CounterActor {
    count: RefCell<i32>,
}

impl Actor for CounterActor {
    type Context = Context<Self>;
}

struct Inc;
impl Message for Inc {
    type Result = i32;
}

impl Handler<Inc> for CounterActor {
    type Result = i32;
    fn handle(&mut self, _msg: Inc, _ctx: &mut Context<Self>) -> i32 {
        let mut count = self.count.borrow_mut();
        *count += 1;
        *count
    }
}

#[actix::main]
async fn main() {
    let addr = CounterActor { count: RefCell::new(0) }.start();
    let new_count = addr.send(Inc).await.unwrap();
    println!("New count: {}", new_count);
}
```
