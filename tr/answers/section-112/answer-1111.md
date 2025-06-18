## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async kaynakların ömrünü yönetme  
#### ✅ Cevap 1111: Async kaynakların ömrünü yönetme

Çözümde, async fonksiyonun sonunda kaynak otomatik olarak kapanır ve bu durum bir mesajla belirtilir.

```rust
use tokio::fs::File;

async fn open_and_close_file() {
    let _file = File::open("foo.txt").await.unwrap();
    // _file burada kullanılabilir
    // Fonksiyon sonunda _file kapanır
    println!("Kaynak otomatik olarak kapandı.");
}
```
