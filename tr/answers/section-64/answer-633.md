## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Async güvenliği için `Pin` ve `Unpin` kullanımı  
#### ✅ Cevap 633: Async güvenliği için `Pin` ve `Unpin` kullanımı

`Pin` ve `Unpin`, async kodda future'ların taşınmasını ve güvenliğini kontrol etmek için kullanılır. Özellikle self-referential future'larda, future'ın bellekte taşınmaması gerekir. `Pin` ile bir değerin taşınamayacağını garanti edersiniz.

```rust
use std::pin::Pin;

fn use_pin<T>(mut x: T) {
    let pinned = Pin::new(&mut x);
    // pinned ile taşınamazlık garantisi sağlanır
}
```
