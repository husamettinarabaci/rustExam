## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Vec Oluşturma ve Başlatma
#### ✅ Cevap 411: Vec oluşturma ve başlatma

Rust'ta vektörler dinamik dizilerdir. Boş bir vektör `Vec::new()` ile, başlangıç değerli bir vektör ise `vec![]` makrosu ile oluşturulabilir.

```rust
fn main() {
    let mut v1: Vec<i32> = Vec::new();
    let v2 = vec![1, 2, 3];
    println!("Boş vektör: {:?}", v1);
    println!("Başlangıç değerli vektör: {:?}", v2);
}
```
