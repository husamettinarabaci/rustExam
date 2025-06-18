## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Doğrulama Testleri için Kanıt Kavramı  
#### ✅ Cevap 954: Doğrulama testleri için kanıt kavramı

Rust'ta birim testler, bir fonksiyonun belirli bir özelliği sağladığını kanıtlamak için kullanılabilir. Örneğin, bir çarpma fonksiyonunun sıfır ile çarpıldığında her zaman sıfır döndürdüğünü test ederek bu özelliği kanıtlayabiliriz.

```rust
fn mul(a: i32, b: i32) -> i32 {
    a * b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_mul_zero_property() {
        // Kanıt: Herhangi bir a için mul(a, 0) == 0
        assert_eq!(mul(5, 0), 0);
        assert_eq!(mul(-3, 0), 0);
    }
}
```
Kanıt temelli testler, kodun belirli matematiksel özellikleri sağladığını güvence altına alır.
