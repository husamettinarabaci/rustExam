## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Default Trait'i  
#### ✅ Cevap 154: Varsayılan başlatma için Default trait'inin kullanımı

Bu fonksiyon, `Default` trait'ini kullanarak jenerik bir tipin yeni bir örneğinin nasıl oluşturulacağını gösterir. Trait, tipin varsayılan değerle başlatılabilmesini sağlar.

```rust
fn new_default<T: Default>() -> T {
    T::default()
}

let x: i32 = new_default();
let s: String = new_default();
```
