## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik
### 🔹 Kategori: Parametrelerde değiştirilebilir ödünç alma
#### ✅ Cevap 374: Parametrelerde değiştirilebilir ödünç alma

Bu soruda, bir fonksiyona değiştirilebilir referans (`&mut Vec<i32>`) ile vektör aktarılır. Fonksiyon, vektöre yeni bir eleman ekler. Bu sayede sahiplik aktarılmadan vektörün içeriği değiştirilebilir.

```rust
fn ekle(v: &mut Vec<i32>) {
    v.push(42);
}

fn main() {
    let mut sayilar = vec![1, 2, 3];
    ekle(&mut sayilar);
    println!("{:?}", sayilar);
}
```
