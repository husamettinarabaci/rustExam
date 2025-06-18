## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1059: `tokio::task::spawn_blocking`'i güvenli kullanma

Bu örnekte CPU yoğun bir işlem `tokio::task::spawn_blocking` ile çalıştırılır ve hata yönetimi sağlanır.

```rust
use tokio::task;

fn cpu_heavy(n: i32) -> Result<i32, &'static str> {
    if n > 0 {
        Ok(n * n)
    } else {
        Err("Pozitif sayı bekleniyor")
    }
}

#[tokio::main]
async fn main() {
    let res = task::spawn_blocking(|| cpu_heavy(-5)).await;
    match res {
        Ok(Ok(val)) => println!("Sonuç: {}", val),
        Ok(Err(e)) => println!("İşlem hatası: {}", e),
        Err(e) => println!("Görev panikledi: {}", e),
    }
}
```
