## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik Sabit Parametreler  
#### ✅ Cevap 230: Yapılarda Jenerik Sabit Parametre Kullanımı

Bu örnekte, bir yapıda jenerik sabit parametrelerin nasıl kullanılacağı gösterilmektedir. `ArrayHolder<T, N>` yapısı, herhangi bir türde ve boyutta (N derleme zamanında sabit) dizi tutabilir. `new` kurucu fonksiyonu bir dizi alır ve yapı örneği döndürür.

```rust
struct ArrayHolder<T, const N: usize> {
    data: [T; N],
}

impl<T, const N: usize> ArrayHolder<T, N> {
    fn new(data: [T; N]) -> Self {
        ArrayHolder { data }
    }
}

fn main() {
    let arr = [1, 2, 3, 4];
    let holder = ArrayHolder::new(arr);
    println!("ArrayHolder içeriği: {:?}", holder.data);
}
```

Burada, `ArrayHolder<i32, 4>` dört elemanlı bir `i32` dizisiyle örneklenmiştir.
