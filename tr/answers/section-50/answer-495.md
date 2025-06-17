## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Testler ve Modül Kapsamı  
#### ✅ Cevap 495: Her modül için anlamlı testler ekleme

Rust'ta her modül için ayrı testler yazmak, kodun güvenilirliğini artırır. Testler `#[cfg(test)]` ve `#[test]` ile tanımlanır ve modülün işlevselliğini doğrular.

```rust
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
```
