## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Metot Zincirleme  
#### ❓ Soru 186: Option ve Result metodlarını zincirleme

Bir `Option<&str>` alan, değeri tam sayıya çevirmeye çalışan ve `Result<i32, String>` döndüren bir Rust fonksiyonu yazın. `map_err`, `ok_or` ve `and_then` ile metot zincirleme kullanın. Farklı girdilerle fonksiyonun nasıl çağrılacağını gösterin.

- Girdi olarak `Option<&str>` alın.
- `ok_or` ile `Option`'ı `Result`'a çevirin.
- `and_then` ve `map_err` ile değeri işleyin ve parse edin.
- Fonksiyonu hem `Some` hem de `None` ile çağırmayı gösterin.

🔧 **Görev:** Rust'ta hata yönetimi ve değer dönüşümü için `Option` ve `Result` metodlarını zincirleme kullanımını gösterin.
