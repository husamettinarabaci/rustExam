## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Biçimsel Belirtim ve Doğrulama  
#### ✅ Cevap 952: Rust programlarının biçimsel olarak belirtilmesi

Biçimsel belirtim, bir fonksiyonun matematiksel olarak ne yapması gerektiğini açıkça tanımlar. Örneğin, bir toplama fonksiyonu için `add(a, b) = a + b` özelliği belirtilir. Bu özellik, testlerle doğrulanabilir.

```rust
// add fonksiyonu: add(a, b) = a + b
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add_spec() {
        // Biçimsel belirtim: add(a, b) == a + b
        assert_eq!(add(2, 3), 5);
        assert_eq!(add(-1, 1), 0);
    }
}
```
