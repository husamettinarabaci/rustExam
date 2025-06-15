## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Result Türü ve Hata Yönetimi  
#### ✅ Cevap 183: Hata yönetimi için Result kullanımı

Bu örnek, Rust'ta hata yönetimi için `Result` türünün nasıl kullanılacağını gösterir. Fonksiyon, bir string'i tam sayıya çevirmeye çalışır ve `Result<i32, std::num::ParseIntError>` döndürür. Çağıran kod, hem başarılı hem de hatalı durumları yönetmek için sonucu eşler.

```rust
fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {
    s.parse::<i32>()
}

fn main() {
    let inputs = ["42", "abc"];
    for input in &inputs {
        match parse_number(input) {
            Ok(n) => println!("Çözümlenen sayı: {}", n),
            Err(e) => println!("'{}' çözümlenemedi: {}", input, e),
        }
    }
}
```

- String çözümlenirse, sayı ekrana yazdırılır.
- Hata olursa, hata mesajı ekrana yazdırılır.
