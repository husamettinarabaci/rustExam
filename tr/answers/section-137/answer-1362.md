## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: Özyinelemeli DSL fonksiyonlarını optimize etme  
#### ✅ Cevap 1362: Özyinelemeli DSL fonksiyonlarını optimize etme

Rust'ta özyinelemeli fonksiyonlar için tail-call optimization (TCO) otomatik olarak uygulanmaz. Bunun yerine, özyinelemeli fonksiyonlar döngüye dönüştürülerek yığın taşması riski azaltılır ve performans artar.

```rust
// Özyinelemeli (stack riski)
fn factorial_rec(n: u64) -> u64 {
    if n == 0 { 1 } else { n * factorial_rec(n - 1) }
}

// İteratif (daha verimli)
fn factorial_iter(mut n: u64) -> u64 {
    let mut result = 1;
    while n > 0 {
        result *= n;
        n -= 1;
    }
    result
}
```
İteratif yaklaşım, büyük girişlerde daha güvenli ve hızlıdır.
