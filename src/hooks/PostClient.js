import axios from "axios";

export default async function PostClients(props){

    const data = {
        "name": props.name,
        "phone_number": props.phone_number,
        "email_adress": props.email_adress
    };

    await axios.post('https://verona-clientes-api.onrender.com/clientes/', data)
        .then(response => {
            console.log('POST request successful:', response.data);
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });

}