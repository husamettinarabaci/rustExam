## 📘 Bölüm: Değişkenler, Sabitler ve Türler  
### 🔹 Kategori: Demetler (Tuple)  
#### ✅ Cevap 12: Demet ile değer atama (destructuring)

**Açıklama:**

Demet destructuring, bir demetin her elemanını tek bir ifadede ayrı değişkenlere atamanızı sağlar.

```rust
fn main() {
    let demet = (10, 2.5, 'z');
    let (a, b, c) = demet;
    println!("a: {}", a);
    println!("b: {}", b);
    println!("c: {}", c);
}
```
