## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1119: Async kodda kaynak sızıntılarını önleme

Bu örnekte, async görevlerde açılan kaynakların kapsam dışında otomatik olarak kapanması sağlanır. Yanlış yönetimde ise kaynaklar açık kalabilir ve sızıntı oluşur.

```rust
use tokio::fs::File;

async fn open_file_leak() {
    let _file = File::open("test.txt").await.unwrap();
    // _file referansı tutulmazsa, dosya hemen kapanmaz ve sızıntı olabilir
}

async fn open_file_proper() {
    let file = File::open("test.txt").await.unwrap();
    // file ile işlem yapılır
    drop(file); // Dosya açıkça kapatılır
}

#[tokio::main]
async fn main() {
    open_file_leak().await;   // Sızıntı riski
    open_file_proper().await; // Doğru yönetim
}
```
