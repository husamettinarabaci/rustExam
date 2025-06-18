## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Görev zamanlama ve waker mekanikleri  
#### ✅ Cevap 634: Görev zamanlama ve waker mekanikleri

Rust'ta async görevler, bir executor tarafından zamanlanır ve `Waker` nesnesi ile uyandırılır. Bir future poll edildiğinde, tamamlanmadıysa bir waker kaydedilir ve future hazır olduğunda waker ile tekrar poll edilir.

```rust
use std::task::{Waker, Context};
// Waker, bir future'ın tekrar poll edilmesini sağlar
```
