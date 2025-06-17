## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Modül Testleri ve Organizasyonu  
#### ✅ Cevap 297: Modül ağaçlarında testleri organize etme

Rust'ta testler genellikle her modülün sonunda, `#[cfg(test)]` ve `mod tests` ile tanımlanır. Bu sayede testler sadece test derlemesinde dahil edilir ve modül hiyerarşisine uygun şekilde organize edilir. Her modül kendi testlerini içerebilir ve alt modüllerin testleri de kendi içinde tanımlanabilir.

```rust
// src/lib.rs
pub mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn test_add() {
            assert_eq!(add(2, 3), 5);
        }
    }
}

pub mod string_utils {
    pub fn to_upper(s: &str) -> String {
        s.to_uppercase()
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn test_to_upper() {
            assert_eq!(to_upper("rust"), "RUST");
        }
    }
}
```

Bu örnekte her modülün sonunda kendi test modülü bulunur ve testler sadece test derlemesinde çalışır.
