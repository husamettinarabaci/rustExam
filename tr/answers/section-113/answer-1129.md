## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktör sistemlerini test ve hata ayıklama
#### ✅ Cevap 1129: Aktör sistemlerini test ve hata ayıklama

Aktör sistemlerinde test, mesajların doğru işlendiğini doğrulamak için yapılır. Rust'ta test fonksiyonları ile aktör mesajlaşması sınanabilir.

```rust
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_actor_message() {
        let mut actor = CounterActor { count: 0 };
        actor.handle_increment();
        assert_eq!(actor.count, 1);
    }
}
```
Bu testte, aktörün mesajı işleyip durumu güncellediği doğrulanır.
