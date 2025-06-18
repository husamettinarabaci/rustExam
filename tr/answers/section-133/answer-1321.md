## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: İleri Düzey const fn Kullanımı ve Sınırlamaları  
#### ✅ Cevap 1321: İleri düzey `const fn` kullanımı ve sınırlamaları

`const fn` fonksiyonları, derleme zamanında sabit değerler üretmek için kullanılır. Ancak, yalnızca belirli işlemler ve kontrol akışları desteklenir. Örneğin, döngüler ve bazı standart kütüphane fonksiyonları kısıtlanmıştır.

```rust
const fn factorial(n: u32) -> u32 {
    if n == 0 { 1 } else { n * factorial(n - 1) }
}

const FACT5: u32 = factorial(5);

fn main() {
    println!("5! = {}", FACT5);
}
```
Bu örnekte, `factorial` fonksiyonu derleme zamanında hesaplanır. `const fn` ile yalnızca sabit ifadeler ve belirli kontrol akışları kullanılabilir.
