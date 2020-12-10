use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde_json::{Result, Value};

mod note;
use note::*;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(post_note)
            .service(get_notes)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

#[get("/note")]
async fn get_notes() -> impl Responder {
    let note1: Note = Note::new("yea whatever...".to_string(), "person1".to_string());
    let note2: Note = Note::new("yes, the second note".to_string(), "person2".to_string());

    let notes: [Note; 2] = [note1, note2];
    let notes: String = serde_json::to_string(&notes).unwrap();

    // use a logger instead of println !!
    println!("somebody requested allda notes!");

    HttpResponse::Ok()
    .content_type("application/json")
    .body(notes)
}

#[post("/note")]
async fn post_note(note: String) -> impl Responder {
    // 1. parse the note from json or whatever
    let note: Note = serde_json::from_str(&note).unwrap();
    // 2. write it to database
    // return ok if success
    println!("{:#?}", note);

    HttpResponse::Ok()
}
