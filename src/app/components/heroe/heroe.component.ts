import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit  {

  hero: HeroModel;
  form: FormGroup;
  id: string;

  constructor(private fb: FormBuilder,
              private firebase: FirebaseService,
              private activatedRoute: ActivatedRoute) {
    this.hero = new HeroModel();
    this.hero.live = true;

    this.createForm();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params?.id;

    if (this.id !== 'new') {
      this.firebase.getHeroById(this.id).subscribe(result => {
        const data = result.data();
        this.hero.id = this.id;
        this.hero.live = data.live;
        this.hero.name = data.name;

        this.form.patchValue({
          name: this.hero.name
        });
        console.log(this.hero);
      });
    }
  }
  createForm() {
    this.form = this.fb.group({
      name: [this.hero.name],
      live: [this.hero.live]
    });
  }

  save() {
    this.hero.name = this.form.value?.name;

    if (this.id === 'new') {
      this.firebase.createHero(this.hero).then((result) => {
        Swal.fire({
          title: 'Hero saved!',
          text: 'Hero saved successfuly',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'OK!',
        });
      }).catch(e => {
        console.log(e);
        Swal.fire({
          title: 'Hero saved error!',
          text: 'Hero saved error',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'OK!',
        });
      });
    } else {
      this.firebase.updateHero(this.id, this.hero).then((result) => {
        Swal.fire({
          title: 'Hero update!',
          text: 'Hero update successfuly',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'OK!',
        });
      }).catch(e => {
        Swal.fire({
          title: 'Hero saved error!',
          text: 'Hero saved error',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'OK!',
        });
      });
    }

  }

  changeLive() {
    this.hero.live = !this.hero.live;
  }

}
