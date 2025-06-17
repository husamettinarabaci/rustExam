## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Dilimleme ve UTF-8
#### ✅ Cevap 394: Stringleri aralıklarla dilimleme ve UTF-8 yönetimi

Rust stringleri UTF-8 kodludur, bu yüzden dilimleme geçerli karakter sınırlarında olmalıdır. Geçersiz byte indeksinde dilimleme panic'e yol açar. Karakter indeksleriyle güvenli dilimleme için `.char_indices()` veya char vektörü kullanılabilir.

```rust
fn main() {
    let s = "merhâba";
    // Geçerli dilim (ilk 2 byte = 'm')
    let m = &s[0..1]; // 'm' 1 byte
    println!("İlk byte: {}", m);
    // Geçersiz dilim (panic olur):
    // let invalid = &s[0..2];
    // Karakterle güvenli dilimleme:
    let chars: Vec<char> = s.chars().collect();
    let slice: String = chars[0..2].iter().collect();
    println!("İlk iki karakter: {}", slice);
}
```
