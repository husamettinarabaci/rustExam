## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async deadlock ve tıkanmaları hata ayıklama
#### ✅ Cevap 1160: Async deadlock ve tıkanmaları hata ayıklama

Bu soruda, async kodda deadlock (kilitlenme) veya tıkanma (stall) oluşturabilecek bir örnek ve bunun tespiti ile çözümü gösterilmiştir. Deadlock genellikle iki async görev karşılıklı birbirini beklediğinde oluşur.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d1 = data.clone();
    let d2 = data.clone();

    // Deadlock örneği: aynı mutex iki kez bekleniyor
    let h1 = tokio::spawn(async move {
        let _lock1 = d1.lock().await;
        // ... başka bir async işlemi beklerken tekrar aynı mutex'i kilitlemek deadlock'a yol açar
        // let _lock2 = d1.lock().await; // Bu satır deadlock'a neden olur
    });
    h1.await.unwrap();
}
```

Deadlock'u tespit etmek için:
- Kodun beklemede takılıp takılmadığını gözlemleyin.
- `tokio-console` gibi async runtime gözlem araçları kullanın.

Çözüm: Aynı mutex'i birden fazla kez beklememek ve kilitleri mümkün olduğunca kısa tutmak gerekir.
