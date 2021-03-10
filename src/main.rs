use actix_web::{web, App, HttpResponse, HttpServer, middleware};
use actix_cors::Cors;
use serde_json::{Result, Value};

mod note;
use note::{*};

// TODO: use sled (https://github.com/spacejam/sled)

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive())
            .wrap(middleware::DefaultHeaders::new().header("Content-Type", "application/json"))
            .service(web::resource("/note")
                .route(web::get().to(get_notes)))
            .service(web::resource("/note")
                .route(web::post().to(post_note)))
    })
    .bind("127.0.0.1:4001")?
    .run()
    .await
}

async fn get_notes() -> HttpResponse {
    let note1: Note = Note::new("yea whatever...".to_string(), "person1".to_string());
    let note2: Note = Note::new("yes, the second note".to_string(), "person2".to_string());

    //let notes: [Note; 2] = [note1, note2];
    let notes: Vec<Note> = vec![note1, note2];
    let notes: String = serde_json::to_string(&notes).unwrap();
    //let notes: String = "{".to_string() + &notes + &"}".to_string();

    // use a logger instead of println !!
    println!("somebody requested allda notes!");

    HttpResponse::Ok()
    .header("Access-Control-Allow-Origin", "*")
    .body(notes)
}

// can only parse data if content type="application/x-www-form-urlencoded"
async fn post_note(note: web::Form<Note>) -> HttpResponse {
    println!("{:#?}", note);

    HttpResponse::Ok()
    .finish()
}
