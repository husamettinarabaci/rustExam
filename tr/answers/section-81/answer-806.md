## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Unsafe kodun sağlamlığını denetleme  
#### ✅ Cevap 806: Unsafe kodun sağlamlığını denetleme

Aşağıda, bir dilimi unsafe olarak ikiye bölen bir fonksiyonun sağlamlığını test eden örnek verilmiştir. Güvenli ve güvensiz kullanımlar gösterilmiştir.

```rust
unsafe fn split_at_mut<T>(slice: &mut [T], mid: usize) -> (&mut [T], &mut [T]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();
    (
        std::slice::from_raw_parts_mut(ptr, mid),
        std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
    )
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    // Güvenli kullanım:
    let (left, right) = unsafe { split_at_mut(&mut arr, 2) };
    println!("{:?} {:?}", left, right);
    // Güvensiz kullanım (mid > arr.len()):
    // let _ = unsafe { split_at_mut(&mut arr, 10) }; // Tanımsız davranış!
}
```

Testlerde, geçerli ve geçersiz parametrelerle fonksiyonun davranışı gözlemlenmelidir.
