use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

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

/*
#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    println!("somebody just echoed this: {}", req_body);
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
*/

#[get("/note")]
async fn get_notes() -> impl Responder {
    // use a logger instead of println !!
    println!("somebody requested allda notes!");
    let body: String = "{ \"notes\": [ {\"content\": \"yea whatever...\"}, {\"note2\": \"yes, the second note\"} ]}".to_string();
    HttpResponse::Ok().body(body)
}

#[post("/note")]
async fn post_note(note: String) -> impl Responder {
    // 1. parse the note from json or whatever
    // 2. write it to database
    // return ok if success

    HttpResponse::Ok()
}
