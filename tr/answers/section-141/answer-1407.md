## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Yükleme Hatalarını Hata Ayıklama  
#### ✅ Cevap 1407: Eklenti yükleme hatalarını hata ayıklama

Eklenti yükleme sırasında oluşan hatalar, `Result` tipiyle yönetilebilir ve loglanabilir. Hatalı eklentiler yüklenmez ve hata mesajı ayrıntılı şekilde raporlanır.

```rust
fn load_plugin(path: &str) -> Result<(), String> {
    if path.ends_with(".so") {
        Ok(())
    } else {
        Err(format!("Geçersiz eklenti dosyası: {}", path))
    }
}

#[test]
fn test_load_plugin() {
    let result = load_plugin("plugin.dll");
    assert!(result.is_err());
    if let Err(msg) = result {
        println!("Yükleme hatası: {}", msg);
    }
}
```
