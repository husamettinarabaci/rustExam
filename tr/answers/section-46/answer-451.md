## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Birim Testler  
#### ✅ Cevap 451: `#[test]` ile birim testler yazma

Rust'ta birim testler `#[test]` özniteliği ile tanımlanır. Test fonksiyonları genellikle `tests` modülünde yer alır ve `assert_eq!` gibi makrolarla doğrulama yapılır.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }
}
```
