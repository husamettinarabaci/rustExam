## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Oluşturma ve Kullanma
#### ✅ Cevap 391: String ve &str oluşturma ve kullanma

Rust'ta `&str` bir string dilimidir (ödünç alınmış görünüm), `String` ise sahipli ve büyüyebilen bir string tipidir. `&str`'den `String`'e `.to_string()` veya `String::from` ile, `String`'den `&str`'ye ise `.as_str()` veya referans ile dönüşüm yapılabilir.

```rust
fn main() {
    let s_slice: &str = "merhaba";
    let s_string: String = String::from("dünya");
    println!("Dilim: {}", s_slice);
    println!("String: {}", s_string);
    // &str'den String'e
    let s1 = s_slice.to_string();
    // String'den &str'ye
    let s2: &str = &s_string;
    println!("Dönüştürüldü: {} {}", s1, s2);
}
```
