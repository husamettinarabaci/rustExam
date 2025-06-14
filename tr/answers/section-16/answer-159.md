## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Jenerik Enumlar  
#### ✅ Cevap 159: Jenerik enum tanımlama ve kullanımı

Bu örnek, jenerik bir enumun nasıl tanımlanacağını ve bunun için bir metot implement edileceğini gösterir. Metot, enumun `Ok` varyantı olup olmadığını kontrol eder.

```rust
enum ResultBox<T, E> {
    Ok(T),
    Err(E),
}

impl<T, E> ResultBox<T, E> {
    fn is_ok(&self) -> bool {
        matches!(self, ResultBox::Ok(_))
    }
}
```
