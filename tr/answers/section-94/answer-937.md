## 📘 Bölüm: Bulut ve Dağıtık Sistemlerde Rust
### 🔹 Kategori: Rust ile Mikroservisler
#### ✅ Cevap 937: Hata toleranslı sistemler oluşturma

Hata toleransı, bir sistemin bazı bileşenleri arızalansa bile doğru çalışmaya devam edebilmesidir. Dağıtık sistemlerde yüksek erişilebilirlik ve güvenilirlik için gereklidir.

Rust, `Result` ve `Option` ile güçlü hata yönetimi sunar. Tekrar deneme, circuit breaker ve supervisor desenleri uygulanabilir. Örnek:

```rust
// Hatalı işlemler için tekrar deneme mantığı
fn retry<F, T, E>(mut op: F, max_retries: u32) -> Result<T, E>
where
    F: FnMut() -> Result<T, E>,
{
    let mut attempts = 0;
    loop {
        match op() {
            Ok(val) => return Ok(val),
            Err(e) if attempts < max_retries => attempts += 1,
            Err(e) => return Err(e),
        }
    }
}

// Hata iletiminde Result kullanımı
fn is_yap() -> Result<(), String> {
    // ...
    Err("hata".to_string())
}

fn main() {
    let sonuc = retry(|| is_yap(), 3);
    match sonuc {
        Ok(_) => println!("Başarılı!"),
        Err(e) => println!("Tekrar denemelerden sonra başarısız: {}", e),
    }
}
```

Stratejiler arasında hata iletimi, tekrar deneme, circuit breaker (ör. `circuitbreaker` crate), supervisor süreçleri, izleme ve hata izolasyonu yer alır. Bunlar, sağlam dağıtık Rust sistemleri için anahtardır.
