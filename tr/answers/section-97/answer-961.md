## 📘 Bölüm: Derleyici İç Yapısı ve Dil Tasarımı  
### 🔹 Kategori: Rust'ın ayrıştırıcı ve leksik analizörü  
#### ✅ Cevap 961: Rust'ın ayrıştırıcı ve leksik analizörü

Rust derleyicisinde leksik analizör (lexer), kaynak kodu karakterlerden anlamlı tokenlara böler. Ayrıştırıcı (parser) ise bu tokenları alıp dilin sözdizimine uygun bir ağaç yapısına (AST) dönüştürür.

Örneğin, `let x = 5 + 3;` ifadesi şu tokenlara ayrılır:
- `let` (anahtar kelime)
- `x` (tanımlayıcı)
- `=` (atama operatörü)
- `5` (sayı)
- `+` (operatör)
- `3` (sayı)
- `;` (noktalı virgül)

Parser bu tokenları alıp bir değişken atama ifadesi olarak AST'ye dönüştürür.
