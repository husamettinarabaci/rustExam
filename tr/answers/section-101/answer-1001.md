## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Tokio ile Görev Başlatma  
#### ✅ Cevap 1001: `tokio::spawn` ile görev başlatma

Bu örnekte, Tokio async runtime'ı ile bir async görev başlatılır. `tokio::spawn` fonksiyonu, verilen async bloğu arka planda çalıştırır ve bir `JoinHandle` döndürür. `await` ile görev tamamlanana kadar beklenir.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        println!("Görev çalışıyor!");
    });
    handle.await.unwrap();
}
```
