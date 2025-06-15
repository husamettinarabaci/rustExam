## 📘 Bölüm: Hata Yönetimi
### 🔹 Kategori: unwrap_or ile hata yönetimi
#### ✅ Cevap 200: unwrap_or ile hata yönetimi

Rust'ta, `Result` üzerinde `unwrap_or` metodu ile hata oluştuğunda varsayılan bir değer verebilirsiniz. Bu, basit yedekleme mantığı için kullanışlıdır. Aşağıda, string'den tam sayıya çevirme örneği verilmiştir:

```rust
fn sayi_cevir(girdi: &str) -> Result<i32, std::num::ParseIntError> {
    girdi.trim().parse::<i32>()
}

fn main() {
    let girdi = "sayi_degil";
    let sayi = sayi_cevir(girdi).unwrap_or(0);
    println!("Sonuç: {}", sayi); // Çevirme başarısızsa 0 yazdırır
}
```

Bu yaklaşım, hata durumunda varsayılan bir değer istediğinizde oldukça kısadır.
