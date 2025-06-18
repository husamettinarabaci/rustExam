## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Test ve Biçimsel Yöntemleri Birleştirme  
#### ✅ Cevap 955: Test ve biçimsel yöntemleri birleştirme

Rust'ta birim testler belirli girdiler için doğruluk sağlarken, property-based testler genel özellikleri doğrular. Aşağıda her ikisinin birlikte kullanıldığı bir örnek verilmiştir.

```rust
fn abs(x: i32) -> i32 {
    if x < 0 { -x } else { x }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_abs_unit() {
        assert_eq!(abs(5), 5);
        assert_eq!(abs(-5), 5);
    }
    #[quickcheck]
    fn prop_abs_nonnegative(x: i32) -> bool {
        abs(x) >= 0
    }
}
```
Bu yaklaşım, hem belirli hem de genel doğruluk sağlar.
