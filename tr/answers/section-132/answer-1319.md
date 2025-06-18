## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: Gömülü DSL'leri Test Etme
#### ✅ Cevap 1319: Gömülü DSL'leri test etme

Bu örnekte, DSL ayrıştırıcı fonksiyonu için birim testleri yazılmıştır.

```rust
fn parse_dsl(input: &str) -> Result<Vec<&str>, String> {
    if input.trim().is_empty() {
        return Err("Boş ifade".to_string());
    }
    Ok(input.split_whitespace().collect())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_valid() {
        assert_eq!(parse_dsl("add 1 2").is_ok(), true);
    }
    #[test]
    fn test_invalid() {
        assert_eq!(parse_dsl("").is_err(), true);
    }
}
```
