## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: assert_eq!, assert_ne! ve assert! makrolarını kullanma  
#### ✅ Cevap 342: assert_eq!, assert_ne! ve assert! makroları ile doğrulama

Rust'ta birim testlerinde `assert_eq!`, `assert_ne!` ve `assert!` makroları, fonksiyonların beklenen çıktısını doğrulamak için kullanılır. `assert_eq!` iki değerin eşitliğini, `assert_ne!` eşit olmamasını, `assert!` ise bir koşulun doğru olmasını test eder.

```rust
fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum_eq() {
        assert_eq!(sum(2, 3), 5);
    }

    #[test]
    fn test_sum_ne() {
        assert_ne!(sum(2, 2), 5);
    }

    #[test]
    fn test_sum_positive() {
        assert!(sum(1, 1) > 0);
    }
}
```
