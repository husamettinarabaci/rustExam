## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Sistemi Testi ve Bakımı  
#### ✅ Cevap 1401: Eklentiler için birim testler yazma

Eklenti fonksiyonları için birim testler, fonksiyonun beklenen çıktıyı verip vermediğini kontrol eder. Rust'ta testler `#[cfg(test)]` ve `#[test]` ile yazılır.

```rust
pub fn plugin_add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_plugin_add() {
        assert_eq!(plugin_add(2, 3), 5);
    }
}
```
Testler, kodun doğruluğunu ve güvenilirliğini sağlar.
