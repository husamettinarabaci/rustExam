## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Result Kombinatörleri  
#### ✅ Cevap 189: Result'ta `map_err` kullanımı

`map_err` metodu, bir `Result`'ın hata değerini dönüştürmenizi sağlar ve başarılı değeri etkilemez. Bu, hata türlerini dönüştürmek veya hatalara açıklama eklemek için kullanışlıdır.

```rust
fn sayi_parse_et(s: &str) -> Result<i32, &str> {
    s.parse::<i32>().map_err(|_| "Geçerli bir sayı değil!")
}

fn main() {
    let sonuc = sayi_parse_et("42").map_err(|e| format!("Hata: {}", e));
    println!("Sonuç: {:?}", sonuc); // Çıktı: Sonuç: Ok(42)

    let sonuc = sayi_parse_et("abc").map_err(|e| format!("Hata: {}", e));
    println!("Sonuç: {:?}", sonuc); // Çıktı: Sonuç: Err("Hata: Geçerli bir sayı değil!")
}
```
