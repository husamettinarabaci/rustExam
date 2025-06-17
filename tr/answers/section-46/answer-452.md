## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Test Modülleri  
#### ✅ Cevap 452: `mod tests` ve `cfg(test)` ile testleri gruplama

Testler genellikle `mod tests` içinde gruplanır ve `#[cfg(test)]` ile sadece test derlemesinde etkinleştirilir. Bu, üretim kodunu test kodundan ayırır.

```rust
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_multiply() {
        assert_eq!(multiply(4, 5), 20);
    }
}
```
