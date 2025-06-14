## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: crate Anahtar Kelimesi  
#### ✅ Cevap 86: `crate` anahtar kelimesini kullanmak

**Açıklama:**
`crate` anahtar kelimesi, kök modüle erişmek için kullanılır.

```rust
fn kok_fonksiyon() {
    println!("Kök fonksiyon");
}

mod alt {
    pub fn kok_cagir() {
        crate::kok_fonksiyon();
    }
}

fn main() {
    alt::kok_cagir();
}
```
