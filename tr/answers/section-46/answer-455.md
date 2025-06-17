## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Test Çalıştırma  
#### ✅ Cevap 455: `cargo test` ile filtre ve bayrak kullanımı

`cargo test` ile tüm testler çalıştırılır. Belirli bir testi çalıştırmak için test adı ile filtreleme yapılabilir. Ek bayraklarla ayrıntılı çıktı alınabilir.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_one() {
        assert_eq!(1 + 1, 2);
    }
    #[test]
    fn test_two() {
        assert!(true);
    }
}
```

Terminalde:

```
cargo test           # Tüm testleri çalıştırır
cargo test test_one  # Sadece test_one fonksiyonunu çalıştırır
cargo test -- --nocapture  # Test çıktısını gösterir
```
