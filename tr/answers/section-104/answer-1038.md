## 📘 Bölüm: Aktör Modeli ve Mesaj Sistemleri  
### 🔹 Kategori: Aktör Eşzamanlılık Modeli  
#### ✅ Cevap 1038: Aktör sistemlerinde hata yönetimi

Aktör tabanlı sistemlerde hata yönetimi, sistemin kararlılığını ve güvenilirliğini sağlamak için kritiktir. Rust'ta aktörler, mesaj handler'larında `Result` döndürerek hataları üst katmana iletebilir. Aşağıda, hata yönetimi içeren bir aktör örneği verilmiştir.

```rust
use actix::prelude::*;

struct FailableActor;

impl Actor for FailableActor {
    type Context = Context<Self>;
}

struct Divide(i32, i32);
impl Message for Divide {
    type Result = Result<i32, String>;
}

impl Handler<Divide> for FailableActor {
    type Result = Result<i32, String>;
    fn handle(&mut self, msg: Divide, _ctx: &mut Context<Self>) -> Self::Result {
        if msg.1 == 0 {
            Err("Division by zero".into())
        } else {
            Ok(msg.0 / msg.1)
        }
    }
}

#[actix::main]
async fn main() {
    let addr = FailableActor.start();
    match addr.send(Divide(10, 0)).await.unwrap() {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
}
```
