## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Özel Result Takma Adı  
#### ✅ Cevap 59: Özel Result takma adı oluşturmak

**Açıklama:**
Tip takma adı ile hata yönetimi kodunuzu daha okunur hale getirebilir.

```rust
enum MyError {
    Oops,
}

type MyResult<T> = Result<T, MyError>;

fn is_yap(x: i32) -> MyResult<i32> {
    if x > 0 {
        Ok(x)
    } else {
        Err(MyError::Oops)
    }
}
```
