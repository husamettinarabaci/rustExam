## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Async kodu etkin şekilde test etme  
#### ✅ Cevap 559: Async kodu etkin şekilde test etme

Bu soruda, async fonksiyonlar için birim test yazımını ve test makrolarının kullanımını öğrendiniz.

```rust
async fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[tokio::test]
    async fn test_add() {
        assert_eq!(add(2, 3).await, 5);
    }
}
```
