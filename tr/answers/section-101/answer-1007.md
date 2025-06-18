## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Görev Koordinasyonu ile `JoinHandle`  
#### ✅ Cevap 1007: `JoinHandle` ile görev koordinasyonu

Bu örnekte, birden fazla async görev başlatılır ve her biri farklı bir mesaj yazdırır. `JoinHandle` ile tüm görevlerin tamamlanması beklenir.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let h1 = tokio::spawn(async { println!("Birinci görev"); });
    let h2 = tokio::spawn(async { println!("İkinci görev"); });
    let h3 = tokio::spawn(async { println!("Üçüncü görev"); });

    let _ = h1.await;
    let _ = h2.await;
    let _ = h3.await;

    println!("Tüm görevler tamamlandı!");
}
```
