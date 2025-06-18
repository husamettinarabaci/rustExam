## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Unsafe Kod Kapsamını Test Etme
#### ✅ Cevap 844: Unsafe kod kapsamını test etme

`unsafe` bloklar içeren kodun güvenliğini sağlamak için kapsamlı testler yazmak gerekir. Hem beklenen davranış hem de sınır durumları test edilmelidir. Ayrıca, Rust'ın test altyapısı ile hem güvenli hem de güvensiz yolları test etmek mümkündür.

```rust
fn get_unchecked(arr: &[i32], idx: usize) -> i32 {
    unsafe { *arr.get_unchecked(idx) }
}

#[test]
fn test_get_unchecked_safe() {
    let arr = [1, 2, 3];
    assert_eq!(get_unchecked(&arr, 1), 2);
}

#[test]
#[should_panic]
fn test_get_unchecked_out_of_bounds() {
    let arr = [1, 2, 3];
    // Bu satır sınır aşımı yapar ve tanımsız davranışa yol açabilir.
    get_unchecked(&arr, 10);
}
```

Bu örnekte, hem güvenli hem de güvensiz yollar test edilmiştir. Sınır aşımı gibi durumlar için `should_panic` kullanılabilir.
