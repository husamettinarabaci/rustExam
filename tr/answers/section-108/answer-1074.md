## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: Tokio zamanlayıcı ve aralık yönetimi  
#### ✅ Cevap 1074: Tokio zamanlayıcı ve aralık yönetimi

Tokio'da zamanlayıcı (`tokio::time::sleep`) ve aralık (`tokio::time::interval`) ile zaman tabanlı görevler planlanabilir.

Örnek:
```rust
use tokio::time::{sleep, interval, Duration};

#[tokio::main]
async fn main() {
    let mut intv = interval(Duration::from_secs(1));
    for _ in 0..3 {
        intv.tick().await;
        println!("Bir saniye geçti");
    }
    sleep(Duration::from_secs(2)).await;
    println!("2 saniye beklediniz");
}
```
Birden fazla zamanlayıcı kullanırken, görevlerin çakışmamasına ve beklenmedik gecikmelere dikkat edilmelidir.
