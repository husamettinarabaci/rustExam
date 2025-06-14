## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Özel Öğeler  
#### ✅ Cevap 89: Modüllerde özel öğeler

**Açıklama:**
Öğeler varsayılan olarak özeldir. Özel öğelere modül dışından erişilemez.

```rust
mod mymod {
    fn gizli() {}
    pub fn acik() {
        // gizli() burada erişilebilir
        gizli();
    }
}

fn main() {
    mymod::acik();
    // mymod::gizli(); // Hata: özel fonksiyon
}
```
