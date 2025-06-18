## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: Hata Kurtarma ve Raporlama
#### ✅ Cevap 1315: Hata kurtarma ve raporlama

Bu örnekte, DSL ifadesi hatalıysa anlamlı bir hata mesajı döndüren bir fonksiyon gösterilmiştir.

```rust
fn parse_dsl(input: &str) -> Result<Vec<&str>, String> {
    if input.trim().is_empty() {
        return Err("DSL ifadesi boş olamaz".to_string());
    }
    let tokens: Vec<&str> = input.split_whitespace().collect();
    if tokens.len() < 3 {
        return Err("Eksik argüman: en az 3 token bekleniyor".to_string());
    }
    Ok(tokens)
}

fn main() {
    match parse_dsl("") {
        Ok(tokens) => println!("{:?}", tokens),
        Err(e) => println!("Hata: {}", e),
    }
    match parse_dsl("add 1 2") {
        Ok(tokens) => println!("{:?}", tokens),
        Err(e) => println!("Hata: {}", e),
    }
}
```
