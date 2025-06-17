## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik
### 🔹 Kategori: Sahiplik aktarma ve ödünç alma
#### ✅ Cevap 375: Sahiplik aktarma ve ödünç alma arasındaki fark

Bu örnekte, bir vektörün sahipliğini bir fonksiyona aktardığınızda, orijinal değişkeni artık kullanamazsınız. Ancak referans ile ödünç verdiğinizde, fonksiyon çağrısından sonra vektörü kullanmaya devam edebilirsiniz. Bu, Rust'ın sahiplik ve ödünç alma kurallarının temel farkıdır.

```rust
fn take_ownership(v: Vec<i32>) {
    println!("Sahiplik alındı: {:?}", v);
}

fn borrow_vector(v: &Vec<i32>) {
    println!("Ödünç alındı: {:?}", v);
}

fn main() {
    let v = vec![1, 2, 3];
    take_ownership(v);
    // println!("Vektör: {:?}", v); // HATA: v'nin sahipliği taşındı

    let v2 = vec![4, 5, 6];
    borrow_vector(&v2);
    println!("Vektör hala kullanılabilir: {:?}", v2);
}
```
