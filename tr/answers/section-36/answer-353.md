## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure Temelleri  
#### ✅ Cevap 353: Closure'lara giriş

Closure'lar, fonksiyonlara benzer şekilde tanımlanabilir ve çağrılabilir. Bu örnekte, bir closure bir parametre alır, ikiyle çarpar ve sonucu döndürür.

```rust
fn main() {
    let double = |x: i32| x * 2;
    let result = double(5);
    println!("Sonuç: {}", result);
}
```
