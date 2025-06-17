## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Birim Testler  
#### ✅ Cevap 341: `#[test]` ile birim testler yazma

Bu örnekte, toplama işlemi yapan bir fonksiyon ve bu fonksiyonu test eden bir birim test modülü tanımlanır. Test fonksiyonu `#[test]` özniteliği ile işaretlenir ve `assert_eq!` makrosu ile beklenen sonuç doğrulanır.

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
        assert_eq!(add(-1, 1), 0);
    }
}
```
