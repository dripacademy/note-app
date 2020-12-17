use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use actix_session::{Session, CookieSession};

#[derive(Serialize, Deserialize, Debug)]
pub struct User {
    id: Option<u64>,
    /// username
    name: String,
    /// sha256 hash
    password: String,
}

impl User {
    pub fn new(name: String, password: String) -> Self {
        User {
            id: None,
            name,
            password,
        }
    }
}

pub async fn login(session: Session) -> impl Responder {

    let user1 = User::new("user1".to_string(), "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8".to_string());
    let user2 = User::new("user2".to_string(), "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8".to_string());

    user1.id = Some(1);
    user2.id = Some(2);
    // use a logger instead of println !!
    println!("somebody requested login!");

    HttpResponse::Ok()
    .header("Access-Control-Allow-Origin", "*")
    .content_type("application/json")
    .body()
}
