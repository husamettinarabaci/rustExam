## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Glob (`*`) ile İçe Aktarma  
#### ✅ Cevap 139: Glob (`*`) ile içe aktarma

Glob içe aktarma (`use modul::*;`) bir modüldeki tüm herkese açık öğeleri kapsamda kullanılabilir hale getirir. Örnek:

```rust
mod aletler {
    pub fn cekic() {
        println!("Çekiç kullanılıyor!");
    }
    pub fn anahtar() {
        println!("Anahtar kullanılıyor!");
    }
}

use aletler::*;

fn main() {
    cekic();
    anahtar();
}
```

- `aletler` modülündeki tüm herkese açık öğeler içe aktarılmıştır.
- `cekic()` ve `anahtar()` fonksiyonları doğrudan çağrılabilir.

**Avantajlar:**
- Bir modülden çok sayıda öğeye ihtiyaç duyulduğunda pratiktir.
- Tek tek `use` satırlarını azaltır.

**Dezavantajlar:**
- Farklı modüllerde aynı isimli öğeler varsa isim çakışmasına yol açabilir.
- Hangi öğenin nereden geldiğini anlamak zorlaşır, kodun okunabilirliği azalır.
