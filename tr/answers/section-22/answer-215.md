## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jeneriklerde Tür Çıkarımı  
#### ✅ Cevap 215: Jeneriklerde tür çıkarımı

Rust, çoğu zaman jenerik tür parametrelerini bağlamdan çıkarabilir, bu nedenle bunları açıkça belirtmeniz gerekmez. Bu örnekte, `wrap_in_option` fonksiyonu `T` türü üzerinde jeneriktir ve bir `Option<T>` döndürür. Çağırırken tür parametresi otomatik olarak çıkarılır.

```rust
fn wrap_in_option<T>(value: T) -> Option<T> {
    Some(value)
}

fn main() {
    let a = wrap_in_option(42);        // T burada i32
    let b = wrap_in_option("merhaba"); // T burada &str
    println!("{:?}", a);
    println!("{:?}", b);
}
```
