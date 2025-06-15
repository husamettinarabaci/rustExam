## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Varsayılan Değerle Açma  
#### ✅ Cevap 187: `unwrap_or` ve `unwrap_or_else` kullanımı

Bu örnek, Rust'ta `Option` ve `Result` ile `unwrap_or` ve `unwrap_or_else` kullanımını gösterir. Fonksiyon, bir `Option<&str>` alır, tam sayıya çevirmeye çalışır ve gerekirse varsayılan değer döndürür.

```rust
fn parse_veya_varsayilan(input: Option<&str>) -> i32 {
    input
        .unwrap_or("0")
        .parse::<i32>()
        .unwrap_or_else(|_| -1)
}

fn main() {
    let girdiler = [Some("42"), Some("abc"), None];
    for input in &girdiler {
        let sonuc = parse_veya_varsayilan(*input);
        println!("Girdi: {:?} => Sonuç: {}", input, sonuc);
    }
}
```

- `unwrap_or`, option `None` ise varsayılan string döndürür.
- `unwrap_or_else`, parse işlemi başarısız olursa varsayılan sayı döndürür.
