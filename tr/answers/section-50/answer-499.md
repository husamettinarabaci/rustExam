## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Güvenli Refaktörizasyon  
#### ✅ Cevap 499: Eski kodu güvenle refaktörize etme

Refaktörizasyon sırasında kodun işlevselliğini korumak için küçük adımlarla ilerlenir, her adımda testler ve derleme yapılır. Kodun okunabilirliği ve bakımı artar.

```rust
// Eski kod
fn sum(a: i32, b: i32) -> i32 {
    a + b
}

// Refaktörize edilmiş kod
fn add(a: i32, b: i32) -> i32 {
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
