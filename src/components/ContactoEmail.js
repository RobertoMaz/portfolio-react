import "../style.css";


function ContactoEmail() {


    return (
        <aside className="contact-card box-shadow-1">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 14.5 16.0625 16 16Z" fill="#D90062"/>
            </svg>                        
            <h5>EMAIL</h5>
            <small><a href="mailto:rjmazzarello@gmail.com">rjmazzarello@gmail.com</a></small>
        </aside>
    );
}

export default ContactoEmail;