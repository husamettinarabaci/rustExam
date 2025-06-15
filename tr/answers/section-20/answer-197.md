## 📘 Bölüm: Hata Yönetimi
### 🔹 Kategori: Kütüphanelerde hata yönetimi
#### ✅ Cevap 197: Kütüphanelerde hata yönetimi

Rust kütüphanelerinde fonksiyonlar, çağıranın hataları yönetebilmesi için genellikle `Result` döndürür. Bu, hataların ergonomik şekilde iletilmesini ve açıkça belgelenmesini sağlar. Aşağıda, string'den tam sayıya çevirme işlemi yapan ve `Result` döndüren bir kütüphane fonksiyonu örneği verilmiştir.

```rust
/// Bir string'i i32'ye çevirir. Çevirme başarısız olursa hata döner.
pub fn sayi_cevir(girdi: &str) -> Result<i32, std::num::ParseIntError> {
    girdi.trim().parse::<i32>()
}

fn main() {
    match sayi_cevir("42a") {
        Ok(n) => println!("Çevrilen sayı: {}", n),
        Err(e) => eprintln!("Sayı çevirme hatası: {}", e),
    }
}
```

Bu yaklaşım, kütüphane kullanıcısının hataları kendi kodunda desen eşleme veya `?` operatörüyle yönetmesini sağlar.
