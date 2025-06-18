## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Alan mantığını izole test etme
#### ✅ Cevap 670: Alan mantığını izole test etme

Alan mantığını izole test etmek, iş mantığını dış bağımlılıklar olmadan birim testlerle sınamak anlamına gelir. Rust'ta gömülü test framework'ü ile fonksiyon ve metotlarınızı test edebilirsiniz.

```rust
struct Hesaplayici;

impl Hesaplayici {
    fn topla(a: i32, b: i32) -> i32 {
        a + b
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_topla() {
        assert_eq!(Hesaplayici::topla(2, 3), 5);
    }
}
```
