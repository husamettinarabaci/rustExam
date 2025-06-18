## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Async Kod ve Future'lar için Test Yazma
#### ✅ Cevap 848: Async kod ve future'lar için test yazma

Rust'ta async fonksiyonlar için test yazmak için genellikle `#[tokio::test]` veya `#[async_std::test]` gibi makrolar kullanılır. Bu makrolar, test fonksiyonunu async olarak çalıştıracak bir runtime başlatır.

```rust
#[tokio::test]
async fn test_async_add() {
    async fn add(a: i32, b: i32) -> i32 { a + b }
    let result = add(2, 3).await;
    assert_eq!(result, 5);
}
```

Async testlerde, runtime'ın doğru başlatılması ve testlerin izole olması önemlidir.
