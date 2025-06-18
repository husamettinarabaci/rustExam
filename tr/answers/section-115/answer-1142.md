## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Thread Sanitizer ve Yarış Dedektörleri  
#### ✅ Cevap 1142: Thread sanitizer ve yarış dedektörleri kullanımı

Thread sanitizer (TSan), Rust'ta thread'ler arası yarış durumlarını tespit eden bir araçtır. Yarış durumu, iki thread'in aynı anda bir değişkeni korumasız şekilde değiştirmesiyle oluşur. TSan ile derleme ve çalıştırma örneği:

```rust
static mut DATA: i32 = 0;
fn main() {
    let t1 = std::thread::spawn(|| unsafe { DATA += 1; });
    let t2 = std::thread::spawn(|| unsafe { DATA += 1; });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

TSan ile çalıştırmak için:
```
cargo run --target x86_64-unknown-linux-gnu -Z sanitizer=thread
```
Bu komut yarış durumunu tespit eder ve raporlar.
