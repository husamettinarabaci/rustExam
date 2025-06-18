## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1058: Async kodda hata senaryolarını test etme

Bu örnekte bir async fonksiyonun hata ve başarı durumları için birim test yazılır. Test fonksiyonu async olarak tanımlanır ve `tokio::test` kullanılır.

```rust
async fn may_fail(flag: bool) -> Result<&'static str, &'static str> {
    if flag {
        Ok("Başarılı!")
    } else {
        Err("Hata oluştu")
    }
}

#[tokio::test]
async fn test_may_fail() {
    assert_eq!(may_fail(true).await.unwrap(), "Başarılı!");
    assert!(may_fail(false).await.is_err());
}
```
