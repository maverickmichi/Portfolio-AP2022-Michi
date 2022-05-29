export class Persona{
    fullName: string;
    birthDate: string;
    aboutMe: string;
    mail: string;
    image: string;
    position: string;
    location: string;

    constructor(fullName: string, birthDate: string, aboutMe: string,mail: string, image: string, position: string, location: string)
    {
        this.fullName=fullName;
        this.birthDate=birthDate;
        this.aboutMe=aboutMe;
        this.mail=mail;
        this.image=image;
        this.position=position;
        this.location=location;
    }

}