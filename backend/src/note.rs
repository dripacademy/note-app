use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Note {
    content: String,
    author: String,
}

impl Note {
    pub fn new(content: String, author: String) -> Self {
        Note {
            content,
            author,
        }
    }
}

