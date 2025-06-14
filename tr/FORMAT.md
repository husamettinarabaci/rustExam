# Soru & Cevap Dosya Formatı Rehberi

Bu belge, bu depodaki Türkçe soru ve cevap dosyaları için gerekli formatı açıklar.

---

## Soru Dosyası (`tr/questions/section-YY/question-XX.md`)

- **Bölüm, Kategori ve Soru Başlığı**:  
  ```
  ## 📘 Bölüm: <Bölüm Adı>  
  ### 🔹 Kategori: <Kategori Adı>  
  #### ❓ Soru XX: <Kısa Başlık>
  ```
- **Görev Açıklaması**:  
  - Kullanıcının ne yapması gerektiğini kısaca açıklayın.
  - Adım adım gereksinimler için madde işaretleri kullanın.
  - İsteğe bağlı olarak, açıklık için bir **Görev** satırı ekleyin.
- **Örnek**:  
  ```markdown
  ## 📘 Bölüm: Başlangıç  
  ### 🔹 Kategori: main Fonksiyonu ve Yazdırma  
  #### ❓ Soru 1: Temel bir Rust programı ile terminale çıktı verme

  Aşağıdakileri yapan bir Rust programı yazın:

  - `main` fonksiyonunu oluşturun ve terminale `Hello, Rust!` yazdırın.

  🔧 **Görev:** Konsola metin yazdırmak için `println!` makrosunu kullanarak temel bir Rust uygulaması oluşturun.
  ```

## Cevap Dosyası (`tr/answers/section-YY/answer-XX.md`)

- **Bölüm, Kategori ve Cevap Başlığı**:  
  ```
  ## 📘 Bölüm: <Bölüm Adı>  
  ### 🔹 Kategori: <Kategori Adı>  
  #### ✅ Cevap XX: <Kısa Başlık>
  ```
- **Açıklama**:  
  - Çözümü kısaca açıklayın, ilgili Rust kavramlarını dahil edin.
- **Kod Bloğu**:  
  - Rust kod blokları için üçlü tırnak işareti kullanın:
    ```
    ```rust
    // Rust kodu buraya
    fn main() {
        println!("Hello, Rust!");
    }
    ```
    ```
- **Örnek**:  
  ```markdown
  ## 📘 Bölüm: Başlangıç  
  ### 🔹 Kategori: main Fonksiyonu ve Yazdırma  
  #### ✅ Cevap 1: Temel bir Rust programı ile terminale çıktı verme

  Bu, Rust'ta en basit çalışan programlardan biridir. `main` fonksiyonu giriş noktasıdır ve `println!` makrosu terminale metin yazdırır.

  ```rust
  fn main() {
      println!("Hello, Rust!");
  }
  ```
  ```

---

## Genel Notlar

- Gösterildiği gibi Markdown başlıkları ve biçimlendirmesini kullanın.
- Her zaman bölüm, kategori ve soru/cevap numarası ile başlık ekleyin.
- Açıklamaları kısa ve ilgili tutun.
- Her iki dilde de yapı ve stil tüm dosyalarda tutarlı olmalıdır.
