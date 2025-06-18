## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Güvenlik sözleşmelerini açıkça dokümante etme  
#### ✅ Cevap 802: Güvenlik sözleşmelerini açıkça dokümante etme

Aşağıda, bir dilimi unsafe olarak ikiye bölen bir fonksiyonun güvenlik sözleşmesi ile birlikte örneği verilmiştir. Fonksiyonun güvenli kullanımı için koşullar açıkça belirtilmiştir.

```rust
/// Dilimi ikiye böler. Unsafe çünkü indislerin geçerli olması gerekir.
///
/// # Güvenlik
///
/// `mid <= slice.len()` olmalıdır. Aksi halde tanımsız davranış olur.
unsafe fn split_at_mut<T>(slice: &mut [T], mid: usize) -> (&mut [T], &mut [T]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();
    (
        std::slice::from_raw_parts_mut(ptr, mid),
        std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
    )
}

fn main() {
    let mut data = [1, 2, 3, 4];
    let (left, right) = unsafe { split_at_mut(&mut data, 2) };
    println!("{:?} {:?}", left, right);
}
```
