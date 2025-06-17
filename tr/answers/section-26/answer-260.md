## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Sahiplik Hataları ve Ayıklama  
#### ✅ Cevap 260: Sık karşılaşılan sahiplik kaynaklı derleme hatalarını ayıklama

Rust'ta sahiplik ve ödünç alma kurallarına uymayan kodlar derleme hatası verir. Aşağıdaki örnekte, bir değişkenin sahipliği bir fonksiyona aktarıldıktan sonra tekrar kullanılmaya çalışılmıştır. Bu, "value borrowed here after move" hatasına yol açar. Hatanın nedeni, Rust'ın veri yarışlarını ve belirsizliği önlemek için sahipliği sıkı şekilde kontrol etmesidir.

**Hatalı Kod:**
```rust
fn main() {
    let s = String::from("merhaba");
    kullan(s); // sahiplik burada aktarılır
    println!("{}", s); // HATA: s artık geçerli değil
}

fn kullan(str: String) {
    println!("Kullan: {}", str);
}
```

**Düzeltilmiş Kod (Referans ile Ödünç Alma):**
```rust
fn main() {
    let s = String::from("merhaba");
    kullan(&s); // referans ile ödünç verildi
    println!("{}", s); // s hala geçerli
}

fn kullan(str: &String) {
    println!("Kullan: {}", str);
}
```

Bu şekilde, sahiplik aktarılmadan referans ile ödünç verildiği için değişken tekrar kullanılabilir.
