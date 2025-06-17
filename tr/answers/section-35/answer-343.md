## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Test Modülleri ve Organizasyon  
#### ✅ Cevap 343: Crate içinde test modüllerini organize etme

Rust'ta test kodlarını ana koddan ayırmak için `#[cfg(test)]` ile işaretlenmiş bir `mod tests` modülü kullanılır. Bu modül yalnızca test derlemesinde dahil edilir ve birden fazla test fonksiyonu içererek testlerinizi düzenli tutmanızı sağlar.

```rust
// Ana kod
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Test modülü
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_positive() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_add_negative() {
        assert_eq!(add(-2, -3), -5);
    }
}
```
