## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Unsafe kod üzerinde güvenli soyutlamalar yazma
#### ✅ Cevap 651: Unsafe kod üzerinde güvenli soyutlamalar yazma

Unsafe kodu güvenli bir soyutlama içinde kapsüllemek Rust'ta temel bir uygulamadır. Unsafe işlemler güvenli bir API arkasında saklanırsa, kullanıcılar tanımsız davranışa yol açamaz.

```rust
fn ilk_eleman(slice: &[i32]) -> Option<&i32> {
    if slice.is_empty() {
        None
    } else {
        // GÜVENLİK: Slice boş değilse 0. elemana erişmek güvenlidir.
        Some(unsafe { slice.get_unchecked(0) })
    }
}

fn main() {
    let v = vec![1, 2, 3];
    println!("{}", ilk_eleman(&v).unwrap());
}
```

Bu desen, kütüphane tasarımı için önemlidir çünkü performans optimizasyonlarını güvenli şekilde sağlar.
