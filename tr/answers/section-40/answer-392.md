## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Dönüşümü
#### ✅ Cevap 392: String, &str ve &[u8] arasında dönüşüm

Bir `String`'i `&str`'ye `.as_str()` ile, `&[u8]`'ye `.as_bytes()` ile dönüştürebilirsiniz. Byte dilimini tekrar stringe çevirmek için `String::from_utf8` (sahipli) veya `std::str::from_utf8` (ödünç) kullanılır, hata kontrolü yapılmalıdır.

```rust
fn main() {
    let s = String::from("merhaba");
    let s_slice: &str = s.as_str();
    let bytes: &[u8] = s_slice.as_bytes();
    println!("Bytes: {:?}", bytes);
    // &[u8]'den &str'ye
    let s2 = std::str::from_utf8(bytes).unwrap();
    println!("Tekrar str: {}", s2);
}
```
