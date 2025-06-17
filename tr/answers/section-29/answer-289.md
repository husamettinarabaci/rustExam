## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Referanslar ve değiştirilebilirlik ile desen eşleme  
#### ✅ Cevap 289: Referanslar ve değiştirilebilirlik ile desen eşleme

Bu örnekte, bir tamsayı değişkeni hem referans (`ref`) hem de değiştirilebilir referans (`ref mut`) ile desen eşleme kullanılarak işlenir. `match` ifadesinde `ref` ile değişkenin referansına, `ref mut` ile ise değiştirilebilir referansına erişilir. Böylece, değişkenin değerini hem okuyabilir hem de değiştirebilirsiniz.

```rust
fn main() {
    let mut x = 10;
    match x {
        ref r => println!("ref ile: {}", r),
    }
    match x {
        ref mut m => {
            *m += 5;
            println!("ref mut ile: {}", m);
        }
    }
}
```
