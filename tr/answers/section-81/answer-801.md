## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Unsafe kod üzerinde güvenli sarmalayıcılar tasarlama  
#### ✅ Cevap 801: Unsafe kod üzerinde güvenli sarmalayıcılar tasarlama

Bu örnekte, bir dilimden (slice) güvenli şekilde maksimum değeri bulan bir fonksiyonun unsafe kodla nasıl sarmalanabileceği gösterilmiştir. Unsafe blok, ham pointer ile erişim için kullanılır; ancak kullanıcıya yalnızca güvenli bir fonksiyon sunulur.

```rust
pub struct SafeMax;

impl SafeMax {
    pub fn max(slice: &[i32]) -> Option<i32> {
        if slice.is_empty() {
            return None;
        }
        unsafe {
            let mut max = *slice.get_unchecked(0);
            for i in 1..slice.len() {
                let val = *slice.get_unchecked(i);
                if val > max {
                    max = val;
                }
            }
            Some(max)
        }
    }
}

fn main() {
    let arr = [1, 5, 3, 2];
    println!("Max: {:?}", SafeMax::max(&arr));
}
```
