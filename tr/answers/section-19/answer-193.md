## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Statik Değişkenler  
#### ✅ Cevap 193: Statik ve mutable statik değişken kullanımı

`static` değişkenler global ve varsayılan olarak değiştirilemezdir. `static mut` değişkenler ise global ve değiştirilebilirdir, ancak veri yarışına yol açabileceği için unsafe blokta erişilmelidir.

```rust
static SELAM: &str = "Merhaba, dünya!";
static mut SAYAC: i32 = 0;

fn main() {
    println!("{}", SELAM);
    unsafe {
        SAYAC += 1;
        println!("SAYAC: {}", SAYAC);
    }
}
```
