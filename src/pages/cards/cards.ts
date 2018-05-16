import {Component, EventEmitter} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


@IonicPage()
@Component({
    selector: 'page-cards',
    templateUrl: 'cards.html',
})
export class CardsPage {

    ready = false;
    attendants = [];
    cardDirection = "xy";
    cardOverlay: any = {
        like: {
            backgroundColor: '#8AC926'
        },
        dislike: {
            backgroundColor: '#FF595E'
        }
    };
    images = [
        // "https://images.unsplash.com/photo-1503025768915-494859bd53b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5421d5e4ac578d20d5b3643a87ece546&auto=format&fit=crop&w=3334&q=80",
        // "./assets/imgs/1.png",
        // "./assets/imgs/2.png",
        // "./assets/imgs/3.png",
        // "./assets/imgs/4.png",
        // "./assets/imgs/5.png",
        // "./assets/imgs/6.png",
        // "./assets/imgs/7.png",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        "./assets/imgs/suchar.jpeg",
        // "https://images.unsplash.com/photo-1520285774798-2f1616131a68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5d974849f34da57c1eaac884b3c55&auto=format&fit=crop&w=3300&q=80",
        // "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=abca021e18ebbf3e780ad03d7f4f598e&auto=format&fit=crop&w=3349&q=80",
        // "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=362d7bfa3bb12d109ccec4ef185281cf&auto=format&fit=crop&w=2098&q=80",
        // "https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=1600&q=80",
        // "https://images.unsplash.com/photo-1525184275980-9028ceb8e09f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=649fa4c325c5d931ccce83cfc77dc6c0&auto=format&fit=crop&w=2250&q=80",
        // "https://images.unsplash.com/photo-1513754537542-f85cde07305a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4bb3fbef64d42491d3003ad687cdd6c&auto=format&fit=crop&w=2250&q=80",
        // "https://images.unsplash.com/photo-1496492254320-b16c3f10f788?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f5654aa2e65c01c50a2be3b3482537a&auto=format&fit=crop&w=2250&q=80",
    ]


    constructor(private sanitizer: DomSanitizer,
                public navCtrl: NavController,
                public navParams: NavParams) {

        for (let i = 0; i < this.images.length; i++) {
            this.attendants.push({
                id: i + 1,
                likeEvent: new EventEmitter(),
                destroyEvent: new EventEmitter(),
                asBg: sanitizer.bypassSecurityTrustStyle('url(' + this.images[i] + ')')
                // asBg: sanitizer.bypassSecurityTrustStyle('url(' + this.images[i] + ')')
            });
        }

        this.ready = true;
    }

    onCardInteract(event) {
        console.log(event);
    }

}
