use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Note {
    pub content: String,
    pub author: String,
}

impl Note {
    pub fn new(content: String, author: String) -> Self {
        Note {
            content,
            author,
        }
    }
}
