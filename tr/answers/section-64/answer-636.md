## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: `futures` crate birleştiricilerini kapsamlı kullanma  
#### ✅ Cevap 636: `futures` crate birleştiricilerini kapsamlı kullanma

`futures` crate, future ve stream'ler üzerinde zincirleme ve birleştirme işlemleri için birçok yardımcı fonksiyon sunar. Örneğin, `join!`, `select!`, `map`, `then` gibi fonksiyonlar ile birden fazla future'ı birleştirebilirsiniz.

```rust
use futures::future::{join, ready};

#[tokio::main]
async fn main() {
    let a = ready(1);
    let b = ready(2);
    let (x, y) = join!(a, b);
    println!("{} {}", x, y);
}
```
