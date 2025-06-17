## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Arama ve Değiştirme
#### ✅ Cevap 397: Alt string arama ve değiştirme

Bir alt stringi `.find()` ile arayabilir, `.replace()` ile değiştirebilirsiniz. `.find()` ilk eşleşmenin byte indeksini `Option<usize>` olarak döndürür.

```rust
fn main() {
    let s = "merhaba dünya, merhaba rust";
    if let Some(idx) = s.find("merhaba") {
        println!("'merhaba' bulundu: {}", idx);
    }
    let degistirilmis = s.replace("merhaba", "selam");
    println!("Değiştirildi: {}", degistirilmis);
}
```
