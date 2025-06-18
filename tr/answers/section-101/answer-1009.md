## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: `futures::join!` ile Async Görevleri Birleştirme  
#### ✅ Cevap 1009: `futures::join!` ile async görevleri birleştirme

Bu örnekte, iki async fonksiyon tanımlanır ve `futures::join!` ile aynı anda başlatılır.

```rust
use futures::join;
use tokio;

async fn birinci() {
    println!("Birinci async fonksiyon");
}

async fn ikinci() {
    println!("İkinci async fonksiyon");
}

#[tokio::main]
async fn main() {
    join!(birinci(), ikinci());
}
```
