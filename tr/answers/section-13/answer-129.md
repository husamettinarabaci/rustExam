## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Testleri  
#### ✅ Cevap 129: Modül testleri

Rust'ta modüller kendi testlerini `#[cfg(test)]` özniteliği ile içerebilir. Test modülleri genellikle aynı dosyada yer alır ve test fonksiyonları için `#[test]` kullanılır. Bu, kod ve testlerin birlikte düzenli tutulmasını sağlar.

```rust
mod matematik {
    pub fn topla(a: i32, b: i32) -> i32 {
        a + b
    }

    #[cfg(test)]
    mod testler {
        use super::*;
        #[test]
        fn test_topla() {
            assert_eq!(topla(2, 3), 5);
        }
    }
}
```
