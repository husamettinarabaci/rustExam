## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Help and Version Output  
#### ✅ Answer 474: Providing help and version output

This example shows how to provide automatic help and version output using `clap`. The `App::version` and `App::about` methods add this information.

```rust
use clap::{App, Arg};

fn main() {
    let _matches = App::new("HelpCLI")
        .version("1.0")
        .about("Help and version example")
        .arg(Arg::with_name("name").help("Username"))
        .get_matches();
}
```
