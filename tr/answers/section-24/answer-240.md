## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `peekable` ve `cycle` kullanımı  
#### ✅ Cevap 240: İteratörlerde `peekable` ve `cycle` kullanımı

Bu çözümde, iteratörler üzerinde `peekable` ve `cycle` metotlarının nasıl kullanılacağı gösterilmektedir. `peekable` ile bir sonraki elemana bakılabilir, `cycle` ise iteratörü sonsuz döngüye sokar.

```rust
fn main() {
    let sayilar = vec![1, 2, 3];

    // Cycle ile elemanları tekrar et
    let mut tekrar = sayilar.iter().cycle();
    println!("Cycle ile ilk beş eleman:");
    for _ in 0..5 {
        if let Some(val) = tekrar.next() {
            print!("{} ", val);
        }
    }
    println!();

    // Peekable ile ileriye bak
    let mut bak_iter = sayilar.iter().peekable();
    if let Some(&sonraki) = bak_iter.peek() {
        println!("Sonraki eleman (peek): {}", sonraki);
    }
    if let Some(val) = bak_iter.next() {
        println!("Sonraki eleman (tüketildi): {}", val);
    }
}
```
