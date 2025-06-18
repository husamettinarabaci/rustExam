## 📘 Bölüm: Gömülü Eşzamanlılık ve Gerçek Zamanlı Sistemler  
### 🔹 Kategori: Eşzamanlılık için donanım zamanlayıcıları ve kesmeler  
#### ✅ Cevap 884: Eşzamanlılık için donanım zamanlayıcıları ve kesmeler

Donanım zamanlayıcıları, belirli aralıklarla kesme üreterek periyodik görevlerin tetiklenmesini sağlar. Kesmeler, önceliklere göre işlenir ve yarış durumları oluşabilir.

Aşağıda zamanlayıcı kesmesiyle LED yakıp söndüren örnek verilmiştir:

```rust
#[interrupt]
fn TIM2() {
    // LED durumunu değiştir
}

fn main() {
    // TIM2 zamanlayıcısını başlat ve kesmeyi etkinleştir
}
```

Kesmeler, yüksek öncelikli görevleri hızlıca çalıştırır. Yarış durumlarını önlemek için kritik bölgeler kullanılmalıdır.
