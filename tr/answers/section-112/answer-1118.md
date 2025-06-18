## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1118: Async RAII desenleri implementasyonu

Bu örnekte, bir async kaynağı bir struct ile yönetiyoruz. Struct drop edildiğinde kaynak otomatik olarak kapanır. Bu, async işlemlerde güvenli kaynak yönetimi sağlar.

```rust
use tokio::fs::File;
use std::ops::Deref;

struct AsyncFile(File);

impl Deref for AsyncFile {
    type Target = File;
    fn deref(&self) -> &Self::Target { &self.0 }
}

impl Drop for AsyncFile {
    fn drop(&mut self) {
        println!("AsyncFile kaynağı kapatılıyor.");
        // File otomatik kapanır
    }
}

#[tokio::main]
async fn main() {
    let file = File::open("test.txt").await.unwrap();
    let _async_file = AsyncFile(file);
    // _async_file kapsamdan çıkınca kaynak kapanır
}
```
