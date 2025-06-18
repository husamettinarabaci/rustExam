## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Görev Hataları ve Panikleri  
#### ✅ Cevap 1005: Görev hatalarını ve paniklerini yönetme

Async görevlerde hata ve panik durumları, `JoinHandle` üzerinden yakalanabilir. Görev panik ederse, `handle.await` bir hata döndürür. Hatalı görevler uygulamanın diğer kısımlarını etkilemez, ancak sonuçlar dikkatle ele alınmalıdır. Panik eden görevler için `Result` ve `JoinError` kullanılır.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        panic!("Görev panikledi!");
    });
    match handle.await {
        Ok(_) => println!("Görev başarıyla tamamlandı"),
        Err(e) => println!("Görev hata ile bitti: {}", e),
    }
}
```
