import axios from 'axios';
import qs from 'qs';

const getNotes = async () => {
    var data = "";

    axios({
        method: "get",
        url: "http://localhost:4000/note",
    }).then((response) => {
        data = response.data;
    }).catch((err) => {
        console.log("Axios err: ", err);
    });

    return data;
}

const postNote = async ({content, author}) => {
    var data = false;

    axios({
        method: "post",
        url: "http://localhost:4000/note",
        data: qs.stringify({content: content, author: author}),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        if (response.status == 201) {
            // true for success
            data = true;
        }
    }).catch((err) => {
        console.log("Axios err: ", err);
    });

    return data;
}

export {getNotes, postNote};
