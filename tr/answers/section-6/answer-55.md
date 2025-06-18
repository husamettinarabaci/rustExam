## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Closure Parametreli Fonksiyonlar  
#### ✅ Cevap 55: Closure parametreli fonksiyon

Closure'lar, fonksiyonlara parametre olarak doğrudan aktarılabilir. Aşağıda, bir closure'ı parametre olarak alan ve bir tamsayıya uygulayan basit bir fonksiyon örneği verilmiştir.

```rust
fn uygula(f: &dyn Fn(i32) -> i32) -> i32 {
    f(10)
}

fn main() {
    let sonuc = uygula(&|x| x * 2);
    println!("Sonuç: {}", sonuc); // Çıktı: Sonuç: 20
}
```
