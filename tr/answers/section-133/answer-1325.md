## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Tip Güvenliği için Sabit Generikler  
#### ✅ Cevap 1325: Tip güvenliği için sabit generikler

Sabit generikler (const generics), derleme zamanında sabit değerlerle tip güvenliğini artırır.

```rust
struct ArrayWrapper<T, const N: usize> {
    data: [T; N],
}

impl<T, const N: usize> ArrayWrapper<T, N> {
    fn new(data: [T; N]) -> Self {
        ArrayWrapper { data }
    }
}

fn main() {
    let arr = ArrayWrapper::new([1, 2, 3]);
    println!("İlk eleman: {}", arr.data[0]);
}
```
Bu örnekte, dizi boyutu tipin bir parçası olarak derleme zamanında belirlenir.
