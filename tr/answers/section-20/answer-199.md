## 📘 Bölüm: Hata Yönetimi
### 🔹 Kategori: if let ile hata yönetimi
#### ✅ Cevap 199: if let ile hata yönetimi

Rust'ta, `if let` ifadesi ile `Result`'ın `Ok` durumunu kolayca yönetebilir ve hata durumunda alternatif bir yol izleyebilirsiniz. Aşağıda, string'den tam sayıya çevirme örneği verilmiştir:

```rust
fn sayi_cevir(girdi: &str) -> Result<i32, std::num::ParseIntError> {
    girdi.trim().parse::<i32>()
}

fn main() {
    let girdi = "123a";
    if let Ok(n) = sayi_cevir(girdi) {
        println!("Çevrilen sayı: {}", n);
    } else {
        eprintln!("Sayı çevirme hatası.");
    }
}
```

Bu yaklaşım, yalnızca başarı durumunu önemsediğinizde oldukça kısadır.
