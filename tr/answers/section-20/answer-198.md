## 📘 Bölüm: Hata Yönetimi
### 🔹 Kategori: match ile hata yönetimi
#### ✅ Cevap 198: match ile hata yönetimi

Rust'ta, fonksiyonlardan dönen `Result` türünü yönetmek için `match` ifadesi kullanılabilir. Bu, hem başarı (`Ok`) hem de hata (`Err`) durumlarını açıkça ele almanızı sağlar. Aşağıda, string'den tam sayıya çevirme örneği verilmiştir:

```rust
fn sayi_cevir(girdi: &str) -> Result<i32, std::num::ParseIntError> {
    girdi.trim().parse::<i32>()
}

fn main() {
    let girdi = "abc";
    match sayi_cevir(girdi) {
        Ok(n) => println!("Çevrilen sayı: {}", n),
        Err(e) => eprintln!("Sayı çevirme hatası: {}", e),
    }
}
```

Bu yaklaşım, hata yönetimini açık ve anlaşılır kılar.
