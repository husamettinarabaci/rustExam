## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Modüller  
#### ✅ Cevap 81: Modül oluşturmak ve kullanmak

**Açıklama:**
Modüller kodu isim alanlarına ayırır. Fonksiyonlar modül içinde tanımlanıp modül yolu ile çağrılır.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let toplam = math::add(2, 3);
    println!("{}", toplam);
}
```
