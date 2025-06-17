## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Doğrulama Makroları  
#### ✅ Cevap 453: `assert_eq!`, `assert!` ve `assert_ne!` kullanımı

`assert_eq!` iki değerin eşitliğini, `assert!` bir koşulun doğru olmasını, `assert_ne!` ise iki değerin eşit olmamasını test eder.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_assert_macros() {
        assert_eq!(2 + 2, 4); // Eşitlik testi
        assert!(3 > 1);       // Koşul testi
        assert_ne!(5, 10);    // Eşit olmama testi
    }
}
```
