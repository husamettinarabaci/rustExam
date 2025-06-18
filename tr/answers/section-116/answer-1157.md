## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Ergonomik async traitler için `async-trait` kullanımı
#### ✅ Cevap 1157: Ergonomik async traitler için `async-trait` kullanımı

Bu soruda, async trait metodu tanımlamak ve uygulamak için `async-trait` crate'i kullanılır. Bu crate, trait'lerde async fonksiyonları ergonomik şekilde tanımlamayı sağlar.

```rust
use async_trait::async_trait;

#[async_trait]
trait Greet {
    async fn greet(&self) -> String;
}

struct Person(String);

#[async_trait]
impl Greet for Person {
    async fn greet(&self) -> String {
        format!("Hello, {}!", self.0)
    }
}

#[tokio::main]
async fn main() {
    let p = Person("Rustacean".into());
    println!("{}", p.greet().await);
}
```
