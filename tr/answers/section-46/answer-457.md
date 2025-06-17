## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Bağımlılıkları Taklit Etme  
#### ✅ Cevap 457: Bağımlılıkları taklit etme ve mantığı izole etme

Mock fonksiyonlar, bağımlılıkları izole ederek testlerin sadece hedeflenen mantığı test etmesini sağlar. Rust'ta genellikle fonksiyon parametreleri ile bağımlılık enjekte edilir.

```rust
fn process<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x) + 1
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_with_mock() {
        let mock = |x| x * 2;
        assert_eq!(process(mock, 3), 7);
    }
}
```
