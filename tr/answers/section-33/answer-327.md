## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Hatalı işlemleri zincirleme ve map_err kullanımı  
#### ✅ Cevap 327: map_err gibi birleştiricilerle hatalı işlemleri zincirleme

Rust'ta `Result` ve `Option` tipleri üzerinde zincirleme işlemler yapmak için `map`, `and_then`, `map_err` gibi fonksiyonel metotlar kullanılır. `map_err`, bir `Result`'ın hata değerini dönüştürmek için kullanılır ve özellikle hata tipini değiştirmek veya özelleştirmek istediğinizde faydalıdır. Bu sayede birden fazla hatalı işlemi zincirleme ve hata yönetimini merkezi hale getirme imkanı sunar.

```rust
fn parse_and_double(input: &str) -> Result<i32, String> {
    input.trim().parse::<i32>()
        .map_err(|e| format!("Parse error: {e}"))
        .map(|n| n * 2)
}

fn main() {
    match parse_and_double("42a") {
        Ok(val) => println!("Sonuç: {val}"),
        Err(e) => println!("Hata: {e}"),
    }
}
```
