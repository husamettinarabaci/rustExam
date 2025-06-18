## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: Anlamsal Analiz
#### ✅ Cevap 1314: DSL'lerde anlamsal analiz

Bu örnekte, bir DSL ifadesinin tokenlarını kontrol eden ve geçersiz bir durumda hata mesajı döndüren basit bir fonksiyon gösterilmiştir.

```rust
fn semantic_check(tokens: &[&str]) -> Result<(), String> {
    if tokens.is_empty() {
        return Err("Empty expression".to_string());
    }
    if tokens[0] != "add" && tokens[0] != "mul" {
        return Err("Unknown operation".to_string());
    }
    Ok(())
}

fn main() {
    let tokens = vec!["add", "1", "2"];
    match semantic_check(&tokens) {
        Ok(()) => println!("Valid DSL expression"),
        Err(e) => println!("Error: {}", e),
    }
}
```
