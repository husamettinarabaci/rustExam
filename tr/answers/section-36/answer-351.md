## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure Temelleri  
#### ✅ Cevap 351: Closure tanımlama ve ortamdan değişken yakalama

Closure'lar, tanımlandıkları kapsamdan değişkenleri otomatik olarak yakalayabilirler. Bu örnekte, bir tamsayı değişkeni closure tarafından referansla yakalanır ve closure çağrıldığında bu değer ekrana yazdırılır.

```rust
fn main() {
    let x = 10;
    let print_x = || {
        println!("x = {}", x);
    };
    print_x();
}
```
