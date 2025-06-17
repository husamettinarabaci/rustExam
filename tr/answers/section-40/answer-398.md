## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Bölme
#### ✅ Cevap 398: Stringleri ayırma (delimiter veya regex ile)

Bir stringi `.split()` ile ayırabilirsiniz. Regex ile ayırmak için `regex` crate'in `Regex::split()` fonksiyonu kullanılır.

```rust
fn main() {
    let s = "elma,armut,üzüm";
    for parca in s.split(',') {
        println!("{}", parca);
    }
    // Regex örneği (regex crate gerekir)
    // use regex::Regex;
    // let re = Regex::new(r",|").unwrap();
    // for parca in re.split(s) {
    //     println!("{}", parca);
    // }
}
```
