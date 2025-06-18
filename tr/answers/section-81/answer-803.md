## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Sıfır maliyetli soyutlamalar implementasyonu  
#### ✅ Cevap 803: Sıfır maliyetli soyutlamalar implementasyonu

Aşağıda, bir dilimi tersine çeviren ve unsafe kodla sıfır maliyetli bir soyutlama sunan örnek verilmiştir. `reverse` fonksiyonu, derleme zamanında ek maliyet getirmez ve güvenli bir API sağlar.

```rust
pub struct ZeroCostReverse;

impl ZeroCostReverse {
    pub fn reverse<T>(slice: &mut [T]) {
        let len = slice.len();
        if len == 0 { return; }
        unsafe {
            let ptr = slice.as_mut_ptr();
            for i in 0..len / 2 {
                std::ptr::swap(ptr.add(i), ptr.add(len - 1 - i));
            }
        }
    }
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    ZeroCostReverse::reverse(&mut arr);
    println!("{:?}", arr);
}
```
