## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Yollar ve `super` anahtar kelimesi  
#### ✅ Cevap 133: Yollar ve `super` anahtar kelimesi

Rust'ta `super` anahtar kelimesi, bir modülün üst modüldeki öğelere erişmesini sağlar. Bu, iç içe modüllerde kodun düzenlenmesinde kullanışlıdır.

```rust
mod ust {
    pub const MESAJ: &str = "Üst modülden merhaba!";
    pub mod alt {
        pub fn mesaj_goster() {
            println!("{}", super::MESAJ);
        }
    }
}

fn main() {
    ust::alt::mesaj_goster();
}
```
