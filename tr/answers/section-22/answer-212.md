## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Varsayılan Metotlar  
#### ✅ Cevap 212: Traitlerde varsayılan metotlar

Trait'te varsayılan metot, gövdesi trait içinde tanımlanan metottur. Uygulayan tip isterse bu metodu ezebilir.

```rust
trait Selamla {
    fn selamla(&self) {
        println!("Merhaba, varsayılan!");
    }
}

struct Kisi;
impl Selamla for Kisi {}
```
