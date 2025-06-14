## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: Varsayılan Trait Uygulamaları  
#### ✅ Cevap 105: Trait'lerde default implementation

**Açıklama:**
Rust'ta bir trait'e varsayılan (default) implementasyon sağlamak için trait içinde fonksiyonun gövdesi yazılır. Örneğin:

```rust
trait MyTrait {
    fn foo(&self) {
        println!("Varsayılan uygulama");
    }
}
```
