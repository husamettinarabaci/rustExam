## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Test İzolasyonu ve Yan Etkiler  
#### ✅ Cevap 460: Test izolasyonu ve yan etkileri anlama

Test izolasyonu, testlerin birbirinden bağımsız çalışmasını sağlar. Yan etkiler (ör. global değişkenler, dosya sistemi değişiklikleri) testlerin güvenilirliğini azaltabilir.

```rust
static mut COUNTER: i32 = 0;

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_one() {
        unsafe { COUNTER += 1; }
        assert_eq!(unsafe { COUNTER }, 1);
    }
    #[test]
    fn test_two() {
        unsafe { COUNTER += 1; }
        assert_eq!(unsafe { COUNTER }, 1); // Bu test başarısız olabilir!
    }
}
```

Yan etkilerden kaçınmak için her testin bağımsız olması gerekir.
