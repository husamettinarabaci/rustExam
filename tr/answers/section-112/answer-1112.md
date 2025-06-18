## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async bağlamda `Drop` kullanımı  
#### ✅ Cevap 1112: Async bağlamda `Drop` kullanımı

Çözümde, bir struct'ın `Drop` trait'i ile bırakıldığında mesaj yazdırılır. Async fonksiyonun sonunda otomatik olarak drop edilir.

```rust
struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Resource dropped!");
    }
}

async fn use_resource() {
    let _r = Resource;
    // _r burada kullanılabilir
    // Fonksiyon sonunda drop edilir
}
```
