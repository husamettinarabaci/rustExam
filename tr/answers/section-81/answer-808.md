## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: API ergonomisi ve güvenliği arasında denge kurma  
#### ✅ Cevap 808: API ergonomisi ve güvenliği arasında denge kurma

Aşağıda, ergonomik ve güvenli bir API sunan, içte unsafe kullanan bir örnek verilmiştir. Kullanıcıdan unsafe blok gerektirmez.

```rust
pub struct FastVec<'a> {
    data: &'a mut [i32],
}

impl<'a> FastVec<'a> {
    pub fn new(data: &'a mut [i32]) -> Self {
        Self { data }
    }
    pub fn get(&self, idx: usize) -> Option<&i32> {
        if idx < self.data.len() {
            Some(unsafe { self.data.get_unchecked(idx) })
        } else {
            None
        }
    }
}

fn main() {
    let mut arr = [10, 20, 30];
    let v = FastVec::new(&mut arr);
    println!("{:?}", v.get(1));
}
```

Kullanıcıya Option ile güvenli erişim sunulurken, içte bounds check atlanır.
