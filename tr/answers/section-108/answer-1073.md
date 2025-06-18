## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: spawn_blocking ile bloklayıcı görevler başlatma  
#### ✅ Cevap 1073: spawn_blocking ile bloklayıcı görevler başlatma

`tokio::task::spawn_blocking`, CPU'yu uzun süre meşgul eden veya bloklayıcı işlemleri async koddan ayırmak için kullanılır. Böylece async thread'ler bloklanmaz.

Örnek:
```rust
use tokio::task;

#[tokio::main]
async fn main() {
    let result = task::spawn_blocking(|| {
        // Bloklayıcı işlem (ör. dosya okuma)
        std::thread::sleep(std::time::Duration::from_secs(2));
        42
    }).await.unwrap();
    println!("Sonuç: {}", result);
}
```
Bu sayede bloklayıcı işlemler ayrı bir thread havuzunda çalışır ve async görevler etkilenmez.
