import { Injectable }    from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class EmailService {

  // Initializes an Http object to send a POST request to the Mailgun API
  constructor(private http: Http) {}

  // Method for sending the users email. Uses an HTTP-POST request to the Mailgun API with the supplied attributes.
  sendEmail(fromName, fromEmail, message) {
    const headers = new Headers();
    headers.append("Authorization", "Basic "+btoa(JSON.parse(localStorage.getItem('EMAIL_API_KEY')).key));
    headers.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    const recieverMail = "eiriknydal@gmail.com";
    const subject = "error report submitted by interactive screen";
    const recieverName = "CSC SERVICE";
    const url = "https://api.mailgun.net/v3/sandbox10b55717efc841c595bc8bda9274c51d.mailgun.org/messages";
    const body = "from="+fromName+"<"+fromEmail+">&to="+recieverName+"<"+recieverMail+">&subject="+subject+"&text="+message;
    return this.http.post(url,body,{headers:headers});
  }

}
