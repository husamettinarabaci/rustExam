## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Metot Zincirleme  
#### ✅ Cevap 186: Option ve Result metodlarını zincirleme

Bu örnek, Rust'ta `Option` ve `Result` metodlarının nasıl zincirleme kullanılacağını gösterir. Fonksiyon, bir `Option<&str>` alır, bunu `Result`'a çevirir ve tam sayıya parse eder.

```rust
fn opsiyonel_sayi_parse(input: Option<&str>) -> Result<i32, String> {
    input
        .ok_or("Değer yok".to_string())
        .and_then(|s| s.parse::<i32>().map_err(|e| e.to_string()))
}

fn main() {
    let girdiler = [Some("42"), Some("abc"), None];
    for input in &girdiler {
        match opsiyonel_sayi_parse(*input) {
            Ok(n) => println!("Çözümlenen: {}", n),
            Err(e) => println!("Hata: {}", e),
        }
    }
}
```

- `ok_or`, `Option`'ı `Result`'a çevirir.
- `and_then` ve `map_err` ile zincirleme hata yönetimi ve işleme yapılır.
