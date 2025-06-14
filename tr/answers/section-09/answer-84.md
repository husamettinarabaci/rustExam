## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: use Anahtar Kelimesi  
#### ✅ Cevap 84: `use` anahtar kelimesini kullanmak

**Açıklama:**
`use` anahtar kelimesi, öğeleri scope'a getirir ve erişimi kolaylaştırır.

```rust
mod mymod {
    pub fn selamla() {
        println!("Merhaba!");
    }
}

use mymod::selamla;

fn main() {
    selamla();
}
```
