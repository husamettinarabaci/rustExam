## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Özel Protokol Ayrıştırıcıları  
#### ✅ Cevap 1208: Özel protokol ayrıştırıcıları yazma

Özel protokol ayrıştırıcıları, belirli bir veri formatını veya iletişim protokolünü çözümlemek için kullanılır. Rust'ta bu tür ayrıştırıcılar genellikle performans ve güvenlik için elle yazılır.

```rust
fn parse_custom_protocol(input: &[u8]) -> Option<(u8, u16)> {
    if input.len() >= 3 {
        let code = input[0];
        let value = u16::from_be_bytes([input[1], input[2]]);
        Some((code, value))
    } else {
        None
    }
}

fn main() {
    let data = [0x01, 0x00, 0x2A];
    if let Some((code, value)) = parse_custom_protocol(&data) {
        println!("Kod: {}, Değer: {}", code, value);
    }
}
```

Bu örnekte, 1 bayt kod ve 2 bayt değer içeren basit bir protokol ayrıştırılmıştır.
