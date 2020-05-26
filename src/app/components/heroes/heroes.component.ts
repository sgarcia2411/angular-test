import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = [];
  load = false;

  constructor(private firebase: FirebaseService) {
    firebase.getHeroes().subscribe(result => {
      console.log(result);
      this.load = true;
      this.heroes = result;
    });
  }

  delete(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Hero!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.firebase.deleteHero(id);
        Swal.fire(
          'Deleted!',
          'Your Hero has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Hero is safe :)',
          'error'
        );
      }
    });
  }

}
