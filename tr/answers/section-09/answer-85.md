## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: super Anahtar Kelimesi  
#### ✅ Cevap 85: `super` anahtar kelimesini kullanmak

**Açıklama:**
`super` anahtar kelimesi, üst modüldeki öğelere erişmek için kullanılır.

```rust
mod ust {
    pub fn ust_fonksiyon() {
        println!("Üstteki");
    }
    pub mod alt {
        pub fn ustu_cagir() {
            super::ust_fonksiyon();
        }
    }
}

fn main() {
    ust::alt::ustu_cagir();
}
```
