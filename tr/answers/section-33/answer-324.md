## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Özel Hata Tipleri ile Option ve Result Dönüşümü  
#### ✅ Cevap 324: Özel Hata Tipleri ile Option ve Result Dönüşümü

Rust'ta kendi hata tipinizi `enum` ile tanımlayabilir ve `Option<T>`'ı `Result<T, E>`'ye dönüştürürken bu özel hata tipini kullanabilirsiniz. `ok_or` veya `ok_or_else` ile hata durumunda kendi tipinizi döndürebilirsiniz.

```rust
#[derive(Debug)]
enum MyError {
    NotFound,
}

fn main() {
    let maybe_val: Option<i32> = None;
    let result: Result<i32, MyError> = maybe_val.ok_or(MyError::NotFound);
    match result {
        Ok(v) => println!("Değer bulundu: {}", v),
        Err(e) => println!("Hata oluştu: {:?}", e),
    }
}
```
