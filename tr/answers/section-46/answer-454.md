## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Panik Testleri  
#### ✅ Cevap 454: `#[should_panic]` ile panik testleri

`#[should_panic]` özniteliği, testin panik ile sonuçlanmasını bekler. Panik oluşmazsa test başarısız olur.

```rust
fn will_panic() {
    panic!("This always panics!");
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    #[should_panic]
    fn test_panic() {
        will_panic();
    }
}
```
