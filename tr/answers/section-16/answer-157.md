## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Higher-Ranked Trait Bounds  
#### ✅ Cevap 157: Higher-ranked trait bound (HRTB) kullanımı

Higher-ranked trait bound, bir fonksiyon veya closure'ın herhangi bir ömre sahip referansları kabul edebilmesini sağlar. Bu, esnek API'ler yazmak için kullanışlıdır.

```rust
fn call_with_str<F>(f: F)
where
    F: for<'a> Fn(&'a str),
{
    f("merhaba");
}

call_with_str(|s| println!("{}", s));
```
