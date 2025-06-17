## 📘 Bölüm: Koleksiyonlar ve İteratörler  
### 🔹 Kategori: Result<T, E> döndüren iteratörlerde hata yönetimi  
#### ✅ Cevap 340: Result döndüren iteratörlerde hata yönetimi

Bu örnekte, bir vektörün her elemanını 2'ye bölmeye çalışıyoruz. Eğer sayı çiftse bölme başarılı olur, tekse hata döneriz. Sonuçları `partition` ile başarılı ve hatalı olarak ayırıyoruz.

```rust
fn main() {
    let numbers = vec![4, 7, 10, 13, 16];
    let results: Vec<_> = numbers
        .into_iter()
        .map(|n| if n % 2 == 0 {
            Ok(n / 2)
        } else {
            Err(format!("{} tek sayıdır, 2'ye bölünemez", n))
        })
        .collect();

    let (oks, errs): (Vec<_>, Vec<_>) = results.into_iter().partition(Result::is_ok);

    println!("Başarılı sonuçlar:");
    for ok in oks {
        if let Ok(val) = ok {
            println!("{}", val);
        }
    }
    println!("Hatalar:");
    for err in errs {
        if let Err(e) = err {
            println!("{}", e);
        }
    }
}
```
