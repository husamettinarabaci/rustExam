## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Performans kritik kodda `unsafe` kullanımı  
#### ✅ Cevap 805: Performans kritik kodda `unsafe` kullanımı

Aşağıda, bir dizinin tüm elemanlarını 2 ile çarpan ve `unsafe` ile bounds check'i atlayan bir örnek verilmiştir. Güvenlik, dizinin boyutunun değişmemesiyle sağlanır.

```rust
fn double_all(slice: &mut [i32]) {
    let len = slice.len();
    unsafe {
        let ptr = slice.as_mut_ptr();
        for i in 0..len {
            *ptr.add(i) *= 2;
        }
    }
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    double_all(&mut arr);
    println!("{:?}", arr);
}
```

Bu kodda, dizinin boyutu sabit olduğu için bounds check atlanabilir ve güvenlik korunur.
