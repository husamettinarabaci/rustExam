## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Deneysel Yansıma Crate'lerini Keşfetme
#### ✅ Cevap 948: Deneysel yansıma crate'lerini keşfetme

Rust'ta yansıma sağlamaya çalışan bazı deneysel crate'ler vardır: `inventory`, `traitobject`, `reflect` gibi.

- `inventory`: Derleme zamanında tip veya fonksiyon kaydı yapıp sonradan keşfetmeye olanak tanır, eklenti sistemleri için kullanışlıdır.
- `traitobject`: Sınırlı dinamik trait nesnesi manipülasyonu sağlar.
- `reflect`: Derleme zamanı yansıma benzeri API'ler sunar, ancak tam çalışma zamanı yansıma değildir.

Sınırlar: Bu crate'ler Java veya C#'taki gibi tam çalışma zamanı tip incelemesi veya değiştirme sunmaz. Eklenti kayıtları, dinamik dispatch veya kod üretimi için uygundur; genel amaçlı yansıma için uygun değildir. API'ler kararsız veya sadece nightly olabilir, dikkatli kullanılmalıdır.
