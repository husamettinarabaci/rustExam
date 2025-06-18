## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 754: Bellek sıralaması ve bariyerleri anlama

Rust'ta atomik işlemlerde bellek sıralaması, işlemlerin diğer thread'ler tarafından nasıl görüleceğini belirler. Farklı sıralama türleri şunlardır:

- `Relaxed`: Sadece atomiklık sağlar, sıralama garantisi yoktur.
- `Acquire`: Okuma işlemi sonrası önceki yazmaların görünmesini garanti eder.
- `Release`: Yazma işlemi öncesi tüm işlemlerin görünmesini garanti eder.
- `AcqRel`: Hem acquire hem release etkisi sağlar.
- `SeqCst`: En güçlü, tüm işlemler için global sıralama sağlar.

Örnek:
```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

static X: AtomicUsize = AtomicUsize::new(0);
static Y: AtomicUsize = AtomicUsize::new(0);

fn main() {
    let t1 = thread::spawn(|| {
        X.store(1, Ordering::Relaxed);
        Y.store(1, Ordering::Release);
    });
    let t2 = thread::spawn(|| {
        while Y.load(Ordering::Acquire) == 0 {}
        assert_eq!(X.load(Ordering::Relaxed), 1);
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```
Bu örnekte, `Y`'ye yapılan `Release` yazma ve `Acquire` okuma, `X`'in değerinin diğer thread tarafından doğru görülmesini sağlar. Bellek bariyerleri, thread'ler arası veri tutarlılığını sağlamak için gereklidir.
