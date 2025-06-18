## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Async Kod Testi ve Ortamı  
#### ✅ Cevap 1010: Async kod testi ve ortamı

Async fonksiyonlar için test yazarken, test fonksiyonunun da async olması gerekir. `#[tokio::test]` makrosu, async test fonksiyonlarının otomatik olarak bir runtime içinde çalışmasını sağlar. Aşağıda basit bir async fonksiyon ve birim testi örneği verilmiştir.

```rust
async fn echo(msg: &str) -> String {
    msg.to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_echo() {
        let result = echo("merhaba").await;
        assert_eq!(result, "merhaba");
    }
}
```
