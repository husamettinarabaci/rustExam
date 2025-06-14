## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: self Anahtar Kelimesi  
#### ✅ Cevap 90: Modüllerde self anahtar kelimesini kullanmak

**Açıklama:**
`self` anahtar kelimesi, mevcut modülü ifade eder. Aynı modül içindeki başka bir fonksiyonu `self::` ile çağırabilirsiniz.

```rust
mod mymod {
    pub fn a() {
        self::b();
    }
    pub fn b() {
        println!("b çağrıldı");
    }
}

fn main() {
    mymod::a();
}
```
