## 📘 Bölüm: Gömülü Eşzamanlılık ve Gerçek Zamanlı Sistemler  
### 🔹 Kategori: Gömülü cihazlarda eşzamanlılık hatalarını ayıklama  
#### ✅ Cevap 886: Gömülü cihazlarda eşzamanlılık hatalarını ayıklama

Eşzamanlılık hataları, beklenmeyen veri değişimi, kilitlenme veya tutarsızlık olarak ortaya çıkar. Semihosting, RTT ve loglama ile hata ayıklanabilir.

Aşağıda yarış durumu tespiti için assert kullanılan bir örnek verilmiştir:

```rust
use core::sync::atomic::{AtomicUsize, Ordering};
static COUNTER: AtomicUsize = AtomicUsize::new(0);

fn increment() {
    let prev = COUNTER.fetch_add(1, Ordering::SeqCst);
    // Beklenen aralık dışıysa hata
    assert!(prev < 100, "Race condition detected!");
}
```

Bu kodda, beklenmeyen sayaç değeri tespit edilirse assert ile hata verilir.
