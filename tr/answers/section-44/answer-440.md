## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Drop ile RAII ve yıkıcı davranışını anlama  
#### ✅ Cevap 440: Drop ile RAII ve yıkıcı davranışını anlama

`Drop` trait'i, bir nesne kapsamdan çıktığında otomatik olarak çalışır ve kaynakları serbest bırakır. Bu, RAII (Resource Acquisition Is Initialization) ilkesini uygular.

```rust
struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Kaynak bırakıldı!");
    }
}

fn main() {
    let _r = Resource;
    println!("Kaynak oluşturuldu.");
}
```
