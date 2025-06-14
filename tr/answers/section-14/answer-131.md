## 📘 Bölüm: Modüller ve Paketler  
### 🔹 Kategori: Modül Temelleri  
#### ✅ Cevap 131: Rust'ta modül nedir?

**Açıklama:**
Modül, kodu isim alanlarına ayırmak için kullanılır. `mod` anahtar kelimesiyle tanımlanır.

```rust
mod benim_modul {
    pub fn selam() {
        println!("Modülden merhaba!");
    }
}

fn main() {
    benim_modul::selam();
}
```
